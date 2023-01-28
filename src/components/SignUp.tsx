import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import english from "../assets/img/english.png";
import uzbek from "../assets/img/uzbek.png";
import rus from "../assets/img/rus.png";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

interface InputProps {
  type: string;
  placeholder: string;
}
interface SubmitButton {
  text: string;
  onClick: () => void;
}
type FormData = {
  name: string;
  surname: string;
  email: string;
  phone: number;
  required: string;
};

const InputText = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`placeholder:text-bold w-full rounded-lg border-2  border-gray-300 p-2 pl-3 text-xl font-medium text-black outline-none placeholder:text-gray-400 focus:border-yellow/60 focus:placeholder:text-yellow/90
      `}
      autoFocus={true}
    />
  );
};
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

const SignUp = () => {
  const router = useRouter();
  const [phone, setPhone] = useState();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <section className="flex min-h-screen w-screen select-none items-center justify-center lg:grid lg:grid-cols-2">
      <div className="hidden bg-gradient-to-b from-yellow/70 to-yellow lg:block">
        <div className="container mt-2">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 rounded-xl border-2 border-black p-2 text-xl capitalize text-black"
          >
            <BiArrowBack fontSize={22} /> <span>back</span>
          </button>
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-2xl font-semibold"></p>
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
          <form
            className="mt-5 flex w-full justify-center px-4 sm:px-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full space-y-3 md:w-1/2">
              <InputText
                type="text"
                placeholder="Surname"
                {...register("surname", { required: true, maxLength: 50 })}
              />
              {errors.surname && (
                <span className="mt-0 text-start text-[16px] font-semibold leading-none text-red-600">
                  Surname is required
                </span>
              )}
              <InputText
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 50 })}
              />
              {errors.name && (
                <span className="mt-0 text-start text-[16px] font-semibold leading-none text-red-600">
                  Name is required
                </span>
              )}
              <InputText
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="mt-0 text-start text-[16px] font-semibold leading-none text-red-600">
                  Email is required
                </span>
              )}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="UZ"
                    value={phone}
                    onChange={() => setPhone(phone)}
                    className="placeholder:text-bold w-full rounded-lg border-2 border-gray-300 p-2 pl-3 text-xl font-medium text-black outline-none placeholder:text-gray-400 focus:border-yellow/60 focus:placeholder:text-yellow/90"
                  />
                )}
              />

              <SubmitButton
                text={"Register"}
                onClick={() => console.log("submit")}
              />

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
