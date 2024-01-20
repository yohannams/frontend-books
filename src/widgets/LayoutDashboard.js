import React from "react";
const LayoutDashboard = (props) => {
  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div className="flex flex-col w-full md:space-y-4">
            <div className="h-screen overflow-auto md:px-6 p-8">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutDashboard;
