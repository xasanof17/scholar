import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";
import { toast, Toaster } from "react-hot-toast";
import english from "../assets/img/english.png";
import uzbek from "../assets/img/uzbek.png";
import rus from "../assets/img/rus.png";
import google from '../assets/img/google.svg'

interface SubmitButton {
  text: string;
  onClick?: () => void;
}
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}
interface GoogleProps {
  text: string;
  onClick: () => void;
}

const SubmitButton = ({ text, onClick }: SubmitButton) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="group relative inline-flex w-full items-center justify-start overflow-hidden rounded-xl px-5 py-3 text-xl font-medium outline-yellow"
    >
      <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-yellow opacity-[3%]"></span>
      <span className="absolute top-0 left-0 -mt-1 h-[600px] w-[600px] -translate-x-[500px] -translate-y-24 rotate-45 bg-yellow opacity-100 transition-all duration-500 ease-in-out hover:rotate-12 group-hover:-translate-x-10 ss:-translate-x-[400px]"></span>
      <span className="relative w-full text-center text-yellow transition-colors duration-200 ease-in-out group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 rounded-xl border-2 border-yellow"></span>
    </button>
  );
};

const GoogleButton = ({ text, onClick }: GoogleProps) => {
  return (
    <button className="flex items-center space-x-4 w-1/4 rounded-xl p-4 text-gray-500 shadow shadow-gray-500">
      <Image src={google} alt='google'/>
      {text}
    </button>
  );
};

const SignUp = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast.success("Successfully");
    reset();
    setTimeout(() => router.back(), 2000);
  };
  return (
    <section className="grid min-h-screen w-screen select-none items-center justify-center md:grid-cols-2">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "20px",
            background: "#000",
            color: "#fff",
            animationName: "initial",
            backdropFilter: "revert-layer",
          },
        }}
      />

      <div className="hidden h-full bg-gradient-to-b from-yellow/70 to-yellow md:block">
        <div className="container mt-2">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 rounded-xl border-2 border-black p-2 text-lg capitalize text-black lg:text-xl"
          >
            <BiArrowBack fontSize={22} /> <span>back</span>
          </button>
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-2xl font-semibold">xa</p>
          </div>
        </div>
      </div>
      <div className="md:bg-white/70">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Link href="/" className="mb-5">
            <Image src="scholar.svg" alt="Scholar" width={250} height={80} />
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold">Welcome to Scholar</h1>
            <p className="text-xl font-normal italic">
              Let's Register Online To Our Course
            </p>
          </div>
          <GoogleButton
            text="Sign up with Google"
            onClick={() => console.log("press")}
          />
          <form
            className="mt-5 flex w-full justify-center px-4 lg:px-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full space-y-3 lg:w-1/2">
              <input
                type="text"
                placeholder="Surname"
                className={`placeholder:text-bold w-full rounded-lg border-2  border-gray-300 p-2 pl-3 text-xl font-medium text-black outline-none placeholder:text-gray-400 focus:border-yellow/60 focus:placeholder:text-yellow/90`}
                autoFocus={true}
                required
                {...register("lastName", { required: true, maxLength: 50 })}
              />

              <input
                type="text"
                placeholder="Name"
                className={`placeholder:text-bold w-full rounded-lg border-2  border-gray-300 p-2 pl-3 text-xl font-medium text-black outline-none placeholder:text-gray-400 focus:border-yellow/60 focus:placeholder:text-yellow/90`}
                required
                {...register("firstName", { required: true, maxLength: 50 })}
              />

              <input
                type="email"
                placeholder="Email"
                className={`placeholder:text-bold w-full rounded-lg border-2  border-gray-300 p-2 pl-3 text-xl font-medium text-black outline-none placeholder:text-gray-400 focus:border-yellow/60 focus:placeholder:text-yellow/90`}
                required
                {...register("email", { required: true })}
              />
              <InputMask
                className="placeholder:text-bold flex w-full items-center rounded-lg border-2 border-gray-300 p-2 pl-3 text-xl font-medium text-black outline-none placeholder:text-black focus:border-yellow/60 focus:placeholder:text-yellow/90"
                placeholder="+998"
                mask={"+\\9\\9\\8\\ 99 999 99 99"}
                maskChar="-"
                {...register("phone", { required: true })}
              />

              <SubmitButton text={"Register"} />

              <div className="flex flex-col items-center space-y-3 ss:flex-row  ss:justify-between ss:space-y-0">
                <Link href={"/"} className="langLink active">
                  <div className="relative h-6 w-6">
                    <Image
                      src={english}
                      alt="EN"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <span>English</span>
                </Link>
                <Link href={"/"} className="langLink active">
                  <div className="relative h-6 w-6">
                    <Image src={uzbek} alt="UZ" fill className="rounded-full" />
                  </div>
                  <span>O'zbek</span>
                </Link>
                <Link href={"/"} className="langLink active">
                  <div className="relative h-6 w-6">
                    <Image src={rus} alt="RU" fill className="rounded-full" />
                  </div>
                  <span>Русский</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
