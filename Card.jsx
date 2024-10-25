import React from "react";

const Card = ({data,handleClick,index}) => {
    const {Image,artist,SongName,added}= data
  return (
    <>
      <div className="bg-zinc-300 rounded-md w-60 p-4 pb-16 flex gap-4 relative mt-10">
        <div className="bg-orange-400 w-16 h-16 rounded">
            <img className="w-full h-full object-cover rounded-md" src={Image}  alt="" />
        </div>
        <div className="">
          <h1 className="font-bold">{SongName}</h1>
          <h1 className="font-semibold">{artist}</h1>
        </div>
        <button onClick={()=>handleClick(index)} className={`absolute whitespace-nowrap px-3 py-1 bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white ${added?"bg-orange-400":"bg-blue-400"} rounded-full`}>
          {added? "Added":"Add to Favorites"}
        </button>
      </div>
    </>
  );
};

export default Card;
