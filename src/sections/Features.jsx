import illustrationEditorMobile from "../assets/images/illustrationEditorMobile.svg";
import illustrationEditorDesktop from "../assets/images/illustrationEditorDesktop.svg";

const Features = () => {
  return (
    <section className="relative lg:mb-28">
      <div className="xl:py-26 flex h-full w-full flex-1 flex-col items-center justify-center gap-12 py-14 text-very-dark-black-blue xl:grid xl:grid-cols-2 xl:gap-36 xl:px-36">
        <h2 className="pb-1 text-center font-overpass text-3xl font-[600] xl:col-span-2 xl:text-[2.7rem]">
          Designed for the future
        </h2>
        <div className="flex w-full items-center justify-center xl:absolute xl:right-[-19.5rem] xl:top-[0rem] xl:order-2 xl:justify-end">
          <picture className="">
            <source
              media="(min-width: 1440px)"
              srcSet={illustrationEditorDesktop}
              alt="illustration Editor Desktop"
              // width={900}
            />
            <img
              src={illustrationEditorMobile}
              alt="illustration Editor Mobile"
            />
          </picture>
        </div>
        <div className="z-40 flex flex-col gap-8 xl:gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="w-full text-center font-overpass text-3xl font-[500] leading-[normal] text-very-dark-black-blue xl:text-left">
              Introducing an{" "}
              <span className="block sm:inline-block"> extensible editor</span>
            </h3>
            <p className="px-9 text-center text-[.99rem] text-very-dark-grayish-blue xl:pl-0 xl:pr-4 xl:text-left xl:text-[.91rem] xl:leading-relaxed">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="w-full text-center font-overpass text-3xl font-[500] leading-[normal] text-very-dark-black-blue xl:text-left">
              Robust content{" "}
              <span className="block sm:inline-block"> management</span>
            </h3>
            <p className="px-9 text-center text-[.99rem] text-very-dark-grayish-blue xl:px-1 xl:pl-0 xl:pr-4 xl:text-left xl:text-[.92rem] xl:leading-relaxed">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
