import { Nav } from "../components/Nav";
import { Tag } from "../components/Tags";
import { AngleScroller } from "../components/AngleScroller";
import { HeroAssets } from "../components/HeroAssets";
import { HeroText } from "../components/HeroText";

export const Hero = () => {
  return (
    <div className="animate-fadeIn z-10">
      <Nav />
      <Tag />
      <HeroText />
      <AngleScroller />
      <HeroAssets />
    </div>
  );
};
