// import { Button } from "@/components/ui/button";
// import { useUser } from "@clerk/clerk-react";
// import { db } from "./../../../configs";
// import { CarImages, CarListing } from "./../../../configs/schema";
// import { desc, eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Service from "@/Shared/Service";
// import CarItem from "@/components/CarItem";
// import { FaTrashAlt } from "react-icons/fa";

// function MyListing() {
//   const { user } = useUser();
//   const [carList, setCarList] = useState([])

//   useEffect(() => {
//     user && GetUserCarListing();
//   }, [user]);

//   const GetUserCarListing = async () => {
//     const result = await db
//       .select()
//       .from(CarListing)
//       .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
//       .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
//       .orderBy(desc(CarListing.id));


//     const resp=Service.FormatResult(result)
//     console.log(resp);
//     setCarList(resp);
//   };

//   return (
//     <div className="mt-6">
//       <div className="flex justify-between items-center">
//         <h2 className="font-bold text-4xl">My Listing</h2>
//         <Link to={"/add-listing"}>
//           <Button>+ Add New Listing</Button>
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
//         {carList.map((item, index)=> (
//             <div key={index}>
//                 <CarItem car ={item}/>
//                 <div className="p-2 bg-gray-50 rounded-lg flex justify-between gap-3">
//                   <Link to={'/add-listing?mode=edit&id='+item?.id} className="w-full">
//                     <Button variant='outline' className="w-full">Edit</Button>
//                     </Link>
//                     <Button variant='destructive'><FaTrashAlt /></Button>
                    
//                 </div>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyListing;

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";
import { FaTrashAlt } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON,
);

function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    user && GetUserCarListing();
  }, [user]);

  const GetUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));

    const resp = Service.FormatResult(result);
    setCarList(resp);
  };

  // 🔥 DELETE LISTING + IMAGES
  const deleteListing = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirmDelete) return;

    try {
      toast("Deleting listing...");

      // 1. GET ALL IMAGES OF THIS LISTING
      const carImages = await db
        .select()
        .from(CarImages)
        .where(eq(CarImages.carListingId, id));

      // 2. DELETE IMAGES FROM SUPABASE STORAGE
      for (let img of carImages) {
        const imagePath = img.imageUrl.split("/storage/v1/object/public/")[1];
        if (imagePath) {
          await supabase.storage.from("car-market").remove([imagePath]);
        }
      }

      // 3. DELETE IMAGES RECORDS FROM DB
      await db.delete(CarImages).where(eq(CarImages.carListingId, id));

      // 4. DELETE THE LISTING FROM DB
      await db.delete(CarListing).where(eq(CarListing.id, id));

      toast.success("Listing deleted successfully!");
      GetUserCarListing(); // refresh list
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete!");
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={"/add-listing"}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
        {carList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className="p-2 bg-gray-50 rounded-lg flex justify-between gap-3">
              <Link
                to={"/add-listing?mode=edit&id=" + item?.id}
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Edit
                </Button>
              </Link>

              <Button
                variant="destructive"
                onClick={() => deleteListing(item.id)}
              >
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyListing;

