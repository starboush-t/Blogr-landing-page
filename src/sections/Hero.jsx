// import { products } from "../constants/index";

import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="backgroundImageRed mb-8 flex h-[85vh] w-screen flex-1 flex-col items-center justify-center gap-10 rounded-es-5xl text-white md:mb-0 lg:h-[70vh] xl:flex-row"
    >
      <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center rounded-es-5xl bg-[url('./assets/images/bgPatternIntroMobile.svg')] bg-[length:1200px_1500px] bg-[center_1rem] pt-12 md:bg-[url('./assets/images/bgPatternIntroDesktop.svg')] md:bg-[center_left_-16rem]">
        <h1 className="text-center font-overpass text-[2.1rem] font-[600] leading-[normal] xl:text-[3rem] xl:leading-[relaxed]">
          A modern <span className="inline-block">publishing platform</span>
        </h1>
        <p className="px-10 py-2 text-center font-overpass text-lg font-[200] text-grayish-blue">
          Grow your audience and build your online brand
        </p>
        <div className="flex gap-4">
          <Button
            bgColor="bg-white"
            fontColor="text-primary-light-red"
            title="Start for Free"
            hoverBgColor={"hover:bg-primary-very-light-red"}
            hoverForegroundColor={"hover:text-white"}
            borderColor={"hover:border-primary-very-light-red"}
          />
          <Button
            bgColor="transparent"
            fontColor="text-white"
            title="Learn More"
            hoverBgColor={"hover:bg-white"}
            hoverForegroundColor={"hover:text-primary-very-light-red"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
