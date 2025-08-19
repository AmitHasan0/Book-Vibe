import React from "react";
import bannerImage from "../../assets/pngwing 1.png";
const Banner = () => {
  return (
    <div className="bg-gray-200 rounded-4xl flex justify-around items-center p-20">
      <div>
        <h1 className="playfair-display font-bold text-5xl mb-5">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="btn btn-success">View The List</button>
      </div>
      <div>
        <img className="w-2/3" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
