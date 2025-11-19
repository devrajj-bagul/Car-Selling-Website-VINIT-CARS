import React from "react";

const OwnersImage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-4xl w-full px-4 py-20">
        
        {/* GRID — always 3 columns */}
        <div className="grid grid-cols-3 gap-8 justify-items-center">

          {/* PERSON 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt="profile"
              className="aspect-square w-28 sm:w-32 lg:w-40 rounded-full object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">Manoj </h3>
            <p className="text-sm text-gray-600">Owner</p>
          </div>

          {/* PERSON 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt="profile"
              className="aspect-square w-28 sm:w-32 lg:w-40 rounded-full object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">Harsh </h3>
            <p className="text-sm text-gray-600">Manager</p>
          </div>

          {/* PERSON 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt="profile"
              className="aspect-square w-28 sm:w-32 lg:w-40 rounded-full object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">Nitin </h3>
            <p className="text-sm text-gray-600">Assistant</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OwnersImage;
