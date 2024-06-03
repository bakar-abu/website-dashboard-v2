// CustomService Model (description,  Proposition, whychooseDesc,  WhyChoose[ref], delivers {actionDesc, actionDesc})
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileAppCard } from "./MobileAppCard";
import { useDispatch } from "react-redux";
import { getMobDevelopment } from "../../api/mobdevelopment";
import { setmobdevData } from "../../redux/mobdevSlice";

export const MobileAppPage = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getMobDevelopment()
      .then((res) => {
        setData(res?.data);
        dispatch(setmobdevData(res?.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className="w-[90%] m-auto"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="text-black text-2xl font-bold">
          Mobile App Development Service Page
        </h2>
      </div>

      {/* Center */}
      <div className="w-[90%] m-auto px-4 py-4 bg-backgroundColor my-3 border border-dashed border-[#0E7789] rounded-md">
        <div className="flex">
          {data && (
            <div className="flex flex-col w-full">
              <MobileAppCard data={data} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
