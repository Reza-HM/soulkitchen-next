import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, KeyboardEvent, useEffect, useState } from "react";
import swal from "sweetalert";

const Signin = () => {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const signinUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/auth/signin`, {
        identifier,
        password,
      });

      if (res.status >= 200 && res.status < 300) {
        swal({
          title: "You Signed In Successfully!",
          icon: "success",
          buttons: ["OK", "Go To The Home Page"],
        }).then(() => {
          setIdentifier("");
          setPassword("");
          router.replace("/");
        });
      } else if (res.status >= 400 && res.status < 500) {
        swal({
          title: "There Is A Problem In Signing You In. Try Again.",
          icon: "error",
          buttons: ["OK", "Try Again"],
        }).then(() => {
          setIdentifier("");
          setPassword("");
        });
      }
    } catch (err) {
      console.error("Error Logging User In:", err);
      swal({
        title: "An unexpected error occurred while signing in.",
        icon: "error",
        buttons: ["OK", "Try Again"],
      }).then(() => {
        setIdentifier("");
        setPassword("");
      });
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      signinUser(event as FormEvent<HTMLFormElement>);
    }
  };

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
            action="post"
            role="form"
            className="flex gap-4 flex-wrap neumorphic-form max-w-4xl"
            onSubmit={signinUser}
            onKeyDown={handleKeyDown}
          >
            <input
              type="text"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER USERNAME OR EMAIL"
              autoComplete="off"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              required
            />
            <input
              type="password"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER PASSWORD"
              autoComplete="off"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button
              type="submit"
              className="neumorphic-button !bg-black !text-zinc-500 !w-full hover:!bg-zinc-600 hover:!text-white !duration-300"
            >
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
