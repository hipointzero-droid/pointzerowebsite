import React, { useEffect, useState } from "react";

const targetTime = new Date("2024-04-21").getTime();

export const Countdown = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     
      <div className="flex items-center gap-2 text-white text-sm font-semibold">
        <p className="font-medium text-base md:block hidden">Starting From:</p>
        <div className="h-[25px] w-[35px] bg-white text-red-500 rounded-md flex items-center justify-center">
        <span>{days}d </span>
        </div>
    <p className="">:</p>
    <div className="h-[25px] w-[40px] bg-white text-red-500 rounded-md flex items-center justify-center">
    <span>{hours}h </span>
        </div>
        <p className="">:</p>
        <div className="h-[25px] w-[35px] bg-white text-red-500 rounded-md flex items-center justify-center">
        <span>{minutes}m </span>
        </div>
        <p className="">:</p>
        <div className="h-[25px] w-[35px] bg-white text-red-500 rounded-md flex items-center justify-center">
        <span>{seconds}s</span>
        </div>
     
       
      </div>
    </>
  );
};