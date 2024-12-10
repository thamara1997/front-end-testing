"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const [errors, setErrors] = useState<any>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loggedUser, setLoggedUser] = useState({
    id: 1,
    email: "darshanathamara143@gmail.com",
    password: "1234",
  });
  const [formData, setFormData] = useState({
    id: 1,
    email: "",
    password: "",
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      {
        errors.email = "Email is invalid.";
      }

      if (!formData.password) {
        errors.password = "Password is required.";
      } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
      }

      setErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    }
  };

  useEffect(() => {
    if (
      formData.email === loggedUser.email &&
      formData.password === loggedUser.password
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [loggedUser, formData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isFormValid) {
      localStorage.setItem("user", JSON.stringify(formData));
      router.push("/");
    } else {
      //   toast.error("Invalid email or password");
      alert("Invalid email or password");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="loginContainer fixed inset-1 flex items-center justify-center">
      <div className="p-10 w-[40%] border border-gray-600 rounded-2xl">
        {" "}
        <h1 className="text-3xl my-10 text-center">LOG IN </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-5">
            <label htmlFor="email" className="mb-5 text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              name="email"
              placeholder="Enter Your Email Here"
              value={formData.email}
              onChange={handleChange}
              className="bg-black h-[40px] rounded-lg border pl-3 border-gray-800"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="flex flex-col my-5">
            <label htmlFor="password" className="mb-5 text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              name="password"
              placeholder="Enter Your password Here"
              value={formData.password}
              onChange={handleChange}
              className="bg-black h-[40px] rounded-lg border pl-3 border-gray-800"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            className="w-full justify-center bg-cyan-400 text-black p-3 rounded-lg my-5"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">
            If you don't have an account please sign up{" "}
            <span className="text-cyan-400">
              <a href="/auth/register">here</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
