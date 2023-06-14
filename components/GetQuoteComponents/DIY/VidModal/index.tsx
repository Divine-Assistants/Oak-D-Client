import { DomesticContext } from "@/context/DomesticWrapper";
import { GlobalContext } from "@/context/GlobalWrapper";
import React, { useContext } from "react";

export function VidModal() {
  const { showVideo, setShowVideo } = useContext(DomesticContext);
  const handleClick = () => {
    setShowVideo(false);
  };

  const handleVideoClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div
      className="bg-[#1E1E1E]/[.4] fixed top-0 left-0 h-[100vh] w-[100%] "
      style={{ display: showVideo === true ? "block" : "none" }}
      onClick={handleClick}
    >
      <div
        className="bg-black m-auto mt-[10%] lg:w-[60%] h-[60%]"
        onClick={handleVideoClick}
      >
        <video controls className="lg:h-[100%] lg:w-[100%]">
          <source src="./vid/diy-video.mp4" />
        </video>
      </div>
    </div>
  );
}

export function VidModal01() {
  const { showVideo, setShowVideo } = useContext(GlobalContext);
  const handleClick = () => {
    setShowVideo(false);
  };

  const handleVideoClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div
      className="bg-[#1E1E1E]/[.4] fixed top-0 left-0 h-[100vh] w-[100%] "
      style={{ display: showVideo === true ? "block" : "none" }}
      onClick={handleClick}
    >
      <div
        className="bg-black m-auto mt-[10%] lg:w-[60%] h-[60%]   "
        onClick={handleVideoClick}
      >
        <video controls className="lg:h-[100%] lg:w-[100%]">
          <source src="./vid/diy-video.mp4" />
        </video>
      </div>
    </div>
  );
}
