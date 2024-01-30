import Link from "next/link";

const Signin = () => {
  return (
    <div className="container my-40">
      <div className="bg-zinc-200/40 p-20 flex flex-col items-center gap-12 rounded-xl">
        <h2 className="font-PlayfairDisplay text-5xl font-semibold tracking-wider">
          Welcome back to the Soul Kitchen!
        </h2>
        <p className="">
          Sign in to be the first to receive special news and event updates from
          SoulKitchen.
        </p>
        <div className="flex flex-col items-center gap-4">
          <form
            action=""
            className="flex gap-4 flex-wrap neumorphic-form max-w-4xl"
          >
            <input
              type="text"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER USERNAME OR EMAIL"
            />
            <input
              type="password"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER PASSWORD"
            />
            <button className="neumorphic-button !bg-black !text-zinc-500 !w-full hover:!bg-zinc-600 hover:!text-white !duration-300">
              SIGN IN
            </button>
          </form>
          <span className="mt-8 tracking-widest">
            <Link href={"/signup"}>Don't have an account? SIGN UP</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Signin;