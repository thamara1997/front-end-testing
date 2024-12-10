"use client";

import Image from "next/image";
import MainLayout from "./layouts/MainLayout";
import { useUserContext } from "./context/userContext";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      redirect("/auth/login");
    }
  });

  return (
    <div>
      <MainLayout />
    </div>
  );
}
