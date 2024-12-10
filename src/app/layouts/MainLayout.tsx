"use client";

import { useState } from "react";
import Content from "../components/Content";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

export default function Page() {
  const [seleted, setSelected] = useState("tasks");
  return (
    <>
      <div>
        <TopNav />
      </div>
      <div className="flex h-[100vh] w-full">
        <div className="w-[20%]">
          <SideNav setSelected={setSelected} selected={seleted} />
        </div>
        <div className="w-[80%]">
          <Content selected={seleted} />
        </div>
      </div>
    </>
  );
}
