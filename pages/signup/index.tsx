import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import swal from "sweetalert";

interface FormData {
  username: string;
  email: string;
  phone: string;
  password: string;
}

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signupUser = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/signup", formData);
      if (res.status === 201) {
        swal({
          title: "You Signed Up Successfully!",
          icon: "success",
          buttons: ["OK", "Go To The Home Page"],
        }).then(() => {
          setFormData({
            username: "",
            email: "",
            phone: "",
            password: "",
          });
          router.replace("/");
        });
      } else if (res.status === 422) {
        swal({
          title: "This email already exists in the website.",
          icon: "error",
          buttons: ["So Bad", "Try Again"],
        });
      }
    } catch (err) {
      console.error("Error in Signing up:", err);
    }
  };

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
        <div className="flex flex-col items-center gap-4">
          <form
            action=""
            className="flex gap-4 flex-wrap neumorphic-form max-w-4xl"
            role="form"
          >
            <input
              type="text"
              name="username"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER USERNAME"
              value={formData.username}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="email"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER EMAIL"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="phone"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER PHONE"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              className="p-4 border-1 !border-zinc-800 text-zinc-700 rounded-xl neumorphic-input"
              placeholder="ENTER PASSWORD"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <button
              type="submit"
              onClick={signupUser}
              className="neumorphic-button !bg-black !text-zinc-500 !w-full hover:!bg-zinc-600 hover:!text-white !duration-300"
            >
              SIGN UP
            </button>
          </form>
          <span className="mt-8 tracking-widest">
            <Link href={"/signin"}>Already have an account? SIGN IN</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Signup;
