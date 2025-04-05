import illustrationLaptopDesktop from "../assets/images/illustrationLaptopDesktop.svg";
import illustrationLaptopMobile from "../assets/images/illustrationLaptopMobile.svg";

const Tooling = () => {
  return (
    <section className="lg:min-w-full">
      <div className="flex flex-1 flex-col items-center justify-center gap-12 py-14 text-very-dark-black-blue lg:mt-36 xl:mt-0 xl:flex-row xl:gap-24 xl:py-0">
        <div className="relative flex w-full items-center justify-center xl:h-[100dvh]">
          <picture className="xl:absolute xl:left-[-17.8rem] xl:top-[0rem]">
            <source
              media="(min-width: 1440px)"
              srcSet={illustrationLaptopDesktop}
              alt="illustration Editor Desktop"
              width={930}
            />
            <img
              src={illustrationLaptopMobile}
              alt="illustration Editor Mobile"
            />
          </picture>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 xl:h-[100dvh] xl:gap-24 xl:py-52">
          <div className="flex flex-col gap-4">
            <h3 className="w-full text-center font-overpass text-3xl font-[500] leading-relaxed text-very-dark-black-blue xl:text-left">
              Free, open, simple
            </h3>
            <p className="px-12 text-center text-[.95rem] text-very-dark-grayish-blue xl:w-[67%] xl:pl-0 xl:pr-4 xl:text-left xl:text-[.91rem] xl:leading-loose">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="w-full text-center font-overpass text-2xl font-[500] leading-[normal] text-very-dark-black-blue xl:text-left">
              Powerful tooling
            </h3>
            <p className="px-12 text-center text-[.95rem] text-very-dark-grayish-blue xl:w-[69%] xl:px-1 xl:pl-0 xl:pr-4 xl:text-left xl:text-[.92rem] xl:leading-loose">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tooling;
