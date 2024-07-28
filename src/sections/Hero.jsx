/* eslint-disable react/no-unescaped-entities */
// Components
import Button from "../components/Button";

import BgImageLg from "../assets/Images/bg.svg";
import BgImageSm from "../assets/Images/bg.svg";

const HeroSm = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="relative">
          <div className="w-screen h-screen">
            <img src={BgImageSm} alt="Image" className="w-full h-full opacity-20"/>
          </div>

          <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center z-10 text-center text-black font-poppins container mx-auto px-2 m-0">
            <h2 className="moveInBottom text-xl font-semibold">
                World Eagle Couriers
            </h2>
            <h1 className="text-2xl font-bold">
                "Delivering Beyond Boundaries"
            </h1>
            <div className="moveInTop flex gap-6 items-center justify-center">
              <a href="https://drive.google.com/file/d/1p9z6XFseyHCHJe9w1hk4JJ5sXunt98EU/view?usp=sharing">
                <Button>Track Order</Button>
              </a>
              <a href="#contact">
                <Button>Book Now</Button>

              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HeroLg = () => {
    return (
      <>
        <div className="w-screen h-screen">
          <div className="relative">
            <div className="w-screen h-screen">
              <img src={BgImageLg} alt="Image" className="w-full h-full opacity-20" />
            </div>
            <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center z-10 text-center text-black font-poppins">
              <h2 className="moveInBottom text-2xl font-semibold">
                World Eagle Couriers
              </h2>
              <h1 className="text-4xl font-bold">
              "Delivering Beyond Boundaries"
              </h1>
              <div className="moveInTop flex gap-6 w-full items-center justify-center mt-10">
                <a href="https://drive.google.com/file/d/1p9z6XFseyHCHJe9w1hk4JJ5sXunt98EU/view?usp=sharing">
                  <Button>Track Order</Button>
                </a>
                <a href="#contact">
                  <Button>Book Now</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

const Hero = () => {
  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center"
        id="home"
      >
        <div className="lg:hidden">
          <HeroSm />
        </div>
        <div className="hidden lg:block">
          <HeroLg />
        </div>
      </div>
    </>
  );
};

export default Hero;
