import React from "react";
import { baseImgUrl } from "../constants";

const DetailDisplay = ({ title, data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex gap-5 flex-wrap ">
        {data.map((item) => (
          <span
            key={item.name}
            className="bg-white text-black py-1 px-2 rounded"
          >
            {item.logo_path ? (
              <div className="bg-white rounded p-2">
                <img
                  className=" object-contain h-[40px] w-[100px]"
                  src={baseImgUrl + item.logo_path}
                  alt=""
                />
              </div>
            ) : (
              item.name
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DetailDisplay;
