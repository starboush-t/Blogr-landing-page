import illustrationPhones from "../assets/images/illustrationPhones.svg";
import bgPatternCircles from "../assets/images/bgPatternCircles.svg";

const States = () => {
  return (
    <section className="backgroundImageBlue relative mt-48 h-screen w-full rounded-es-5xl rounded-se-5xl px-5 py-20 md:mt-72 md:px-10 lg:mt-5 xl:mt-0 xl:h-[25.5rem] xl:px-44">
      <div className="backgroundImageCircle w-full h-full z-10 absolute top-0 left-0 rounded-es-5xl rounded-se-5xl ">
        <div className="absolute top-[-11rem] flex flex-col items-center w-full justify-center space-y-10 md:top-[-16rem] md:space-x-10 md:space-y-0 xl:top-[-4rem] xl:flex-row xl:space-x-20">
          <img src={illustrationPhones} alt="Illustration of phones" />
          <div className="font-poppins text-center text-white md:text-left xl:w-[32rem]">
            <h2 className="mb-5 text-center text-4xl font-bold">
              State of the Art{" "}
              <span className="block md:inline">Infrastructure</span>
            </h2>
            <p className="px-3 text-center">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
