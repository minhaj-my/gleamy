// components/HeroAssets.jsx
import { logo2nd, watchVideo, gLogo } from "../assets";

export const HeroAssets = () => {
  return (
    <>
      <img
        src={logo2nd}
        className="absolute top-18  max-sm:left-4 max-sm:top-24 left-8"
      />
      <img
        src={watchVideo}
        className="absolute bottom-4 max-sm:bottom-24 right-4  "
      />

      <img
        src={gLogo}
        className="absolute left-[16%] w-42  max-md:top-1/4 top-1/4 max-md:left-1/2 -translate-x-1/2 "
      />
    </>
  );
};
