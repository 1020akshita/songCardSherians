import React from "react";

const Navbar = ({ data }) => {
  return (
    <div className="w-full h-12 px-20  py-1 bg-blue-300 flex justify-between items-center">
      Orange
      <div className="bg-orange-500 px-3 py-1 rounded-md text-white flex justify-center items-center gap-3">
        <h1>Favourites :</h1>
        <h1>{data.filter(e => e.added).length}</h1>
      </div>
    </div>
  );
};

export default Navbar;
