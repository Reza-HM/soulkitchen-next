const SignUp = () => {
  return (
    <div className="container p-20 mt-40">
      <div className="bg-zinc-200/40 p-20 flex flex-col items-center gap-12">
        <h2 className="font-PlayfairDisplay text-5xl font-semibold tracking-wider">
          Keep Up to Date with Soul Kitchen
        </h2>
        <p>
          Sign up to be the first to receive special news and event updates from
          SoulKitchen.
        </p>
        <div className="flex flex-col items-center gap-4">
          <form action="" className="flex gap-4">
            <input
              type="text"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl"
              placeholder="ENTER EMAIL"
            />
            <input
              type="password"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl"
              placeholder="ENTER PASSWORD"
            />
          </form>
          <button className="bg-black text-zinc-400 hover:bg-zinc-500 hover:text-white w-full p-4 rounded-xl duration-300">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
