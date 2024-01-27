const SignUp = () => {
  return (
    <div className="container my-40">
      <div className="bg-zinc-200/40 p-20 flex flex-col items-center gap-12 rounded-xl">
        <h2 className="font-PlayfairDisplay text-5xl font-semibold tracking-wider">
          Keep Up to Date with Soul Kitchen
        </h2>
        <p className="">
          Sign up to be the first to receive special news and event updates from
          SoulKitchen.
        </p>
        <div className="flex flex-col items-center gap-4 neumorphic-form">
          <form action="" className="flex gap-4 flex-wrap">
            <input
              type="text"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER EMAIL"
            />
            <input
              type="password"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER PASSWORD"
            />
          </form>
          <button className="neumorphic-button !bg-black !text-zinc-500 !w-full">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
