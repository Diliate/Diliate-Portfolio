import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Logo Section: Added here */}
      <div className="flex justify-center mt-10">
        <svg
          width="36"
          height="33"
          viewBox="0 0 36 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.5298 24.2539V32.1728H15.7801C10.0259 32.1728 5.00152 28.9882 2.31408 24.2539C1.12492 22.1555 0.426042 19.8142 0.27002 17.4061L0.27002 15.2667C0.340185 14.1677 0.52438 13.0791 0.819624 12.0184C2.66606 5.36873 8.66555 0.5 15.7787 0.5C22.8961 0.5 28.8941 5.37163 30.7391 12.017H22.2946C20.9097 9.85005 18.5094 8.41748 15.7801 8.41748C13.0508 8.41748 10.6519 9.85005 9.26564 12.017C8.83717 12.6842 8.51136 13.4123 8.29914 14.1767C8.10465 14.88 8.00662 15.6066 8.00775 16.3364C8.00456 17.4114 8.21895 18.476 8.63797 19.4656C9.057 20.4552 9.67194 21.3495 10.4456 22.0942C11.877 23.4801 13.7898 24.2544 15.7801 24.2539H35.5298Z"
            fill="#FD366E"
          />
        </svg>
      </div>

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Diliate A Fully Integrated Digital Marketing Firm
          </p>

          <TextGenerateEffect
            words=" Diliate Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            We provide a wide range of services to help you achieve your goals
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
