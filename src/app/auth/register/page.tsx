"use client";

import { User } from "@/app/utils/user";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const [errors, setErrors] = useState<any>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    id: 1,
    fullName: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const [user, setUser] = useState<User>({
    id: null,
    email: "",
    password: "",
  });

  useEffect(() => {
    validateForm();
    setUser({
      id: formData.id,
      email: formData.email,
      password: formData.password,
    });
  }, [formData]);

  const validateForm = () => {
    let errors = {};

    if (!formData.fullName) {
      errors.fullName = "Full name is required.";
    }

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
    if (formData.email && formData.password && formData.fullName) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isFormValid) {
      localStorage.setItem("user", JSON.stringify(user));
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
        <h1 className="text-3xl my-10 text-center">REGISTER </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-5">
            <label htmlFor="fullName" className="mb-3 text-xl">
              Full Name
            </label>
            <input
              type="fullName"
              id="fullName"
              required
              name="fullName"
              placeholder="Enter Your Full Name Here"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-black h-[40px] rounded-lg border pl-3 border-gray-800"
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )}
          </div>
          <div className="flex flex-col my-5">
            <label htmlFor="email" className="mb-3 text-xl">
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
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col my-5">
            <label htmlFor="password" className="mb-3 text-xl">
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
              <span className="text-red-500">{errors.password}</span>
            )}
          </div>

          <button
            className="w-full justify-center bg-cyan-400 text-black p-3 rounded-lg my-5"
            type="submit"
          >
            Register
          </button>
          <p className="text-center">
            If you have an account please sign in{" "}
            <span className="text-cyan-400">
              <a href="/auth/login">here</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
