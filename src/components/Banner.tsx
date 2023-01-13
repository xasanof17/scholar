import { Play } from "../widgets";

interface Props {
  subtitle: string;
  text: string;
}

const Banner = ({ subtitle, text }: Props) => {
  return (
    <section className="my-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col">
            <span className="subtitle">{subtitle}</span>
            <h1 className="w-full max-w-none text-3xl font-normal capitalize leading-tight ss:text-4xl sm:text-5xl xl:max-w-[620px] xl:text-6xl">
              Get Quality <b>Tutoring</b> <b>Through</b>{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow ">
                <b className="relative">1-on-1</b>
              </span>{" "}
              <br /> Online Tutoring
            </h1>
            <p className="mt-3 w-full max-w-[500px] text-base text-light ss:text-lg sm:mt-6 sm:text-[22px] md:mt-8 xl:max-w-[600px]">
              {text}
            </p>
            <div className="mt-7 flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
              <button
                type="button"
                className="btn-yellow w-full rounded-full px-10 py-4 sm:w-fit"
              >
                Join for Free
              </button>
              <button className="flex items-center space-x-3">
                <Play />
                <p className="text-lg font-bold underline">See How It Works</p>
              </button>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-5 sm:grid">
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
