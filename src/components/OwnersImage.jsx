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
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg"
              alt="profile"
              className="aspect-square w-28 sm:w-32 lg:w-40 rounded-full object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">Manoj </h3>
            <p className="text-sm text-gray-600">Owner</p>
          </div>

          {/* PERSON 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://t4.ftcdn.net/jpg/03/80/58/23/360_F_380582318_5lJ52eVLcePphpM4pMHdew3wgopfhQSc.jpg"
              alt="profile"
              className="aspect-square w-28 sm:w-32 lg:w-40 rounded-full object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">Harsh </h3>
            <p className="text-sm text-gray-600">Manager</p>
          </div>

          {/* PERSON 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://static.startuptalky.com/2024/03/Sneha-Choudhry-Women-Entrepreneurs-In-India-StartupTalky.jpg"
              alt="profile"
              className="aspect-square w-28 sm:w-32 lg:w-40 rounded-full object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">Janhavi </h3>
            <p className="text-sm text-gray-600">Assistant</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OwnersImage;
