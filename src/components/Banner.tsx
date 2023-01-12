import { Play } from "../widgets";

interface Props {
  subtitle: string;
  text: string;
}

const Banner = ({ subtitle, text }: Props) => {
  return (
    <section className="my-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4">
          <div className="flex flex-col">
            <span className="mb-2 sm:mb-8 text-lg sm:text-xl xl:text-2xl font-medium uppercase text-yellow">
              {subtitle}
            </span>
            <h1 className="w-full max-w-none xl:max-w-[620px] text-3xl ss:text-4xl sm:text-5xl xl:text-6xl font-normal capitalize leading-tight">
              Get Quality <b>Tutoring</b> <b>Through</b>{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow ">
                <b className="relative">1-on-1</b>
              </span>{" "}
              <br /> Online Tutoring
            </h1>
            <p className="mt-3 sm:mt-6 md:mt-8 w-full max-w-[500px] xl:max-w-[600px] text-base ss:text-lg sm:text-[22px] text-[#747475]">
              {text}
            </p>
            <div className="mt-7 flex items-center flex-col sm:flex-row space-y-5 sm:space-x-5">
              <button
                type="button"
                className="btn-yellow rounded-full px-10 py-4 w-full sm:w-fit"
              >
                Join for Free
              </button>
              <button className="flex items-center space-x-3">
                <Play />
                <p className="text-lg font-bold underline">See How It Works</p>
              </button>
            </div>
          </div>
          <div className="hidden sm:grid grid-cols-2 gap-5">
            <div className="relative flex h-[250px] items-center justify-center rounded-full bg-[#7DC3DD]">
              <span className="absolute -top-6 right-4 block h-5 w-5 rounded-full bg-yellow" />
              <span className="absolute -bottom-1 -left-1 block h-5 w-5 rounded-full bg-[#FEA3C6]" />
            </div>
            <div className="relative flex h-[250px] items-center justify-center rounded-2xl bg-[#FEA3C6]">
              <span className="absolute -top-10 -right-3 z-10 block h-[240px] w-[240px] rounded-full bg-yellow 2xl:right-7" />
            </div>
            <div className="flex h-[250px] items-center justify-center rounded-2xl bg-yellow/80"></div>
            <div className="flex h-[250px] items-center justify-center rounded-full bg-[#E6E6E6]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
