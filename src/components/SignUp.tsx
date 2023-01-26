import Link from "next/link";

const Login = () => {
  return (
    <section className="grid min-h-screen w-screen grid-cols-2">
      <div className="bg-yellow">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-2xl font-semibold">Scholar Left</p>
        </div>
      </div>
      <div className="bg-white/70">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Link href="/" className="text-3xl font-bold">
            Scholar
          </Link>
          <form className="w-full px-10">
            <input type="text" placeholder="Your name" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
