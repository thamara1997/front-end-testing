"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "../utils/user";
import { redirect } from "next/navigation";
interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  logoutUser: (id: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const loggedinUser = localStorage.getItem("user");

  const [user, setUser] = useState<User>(
    loggedinUser ? JSON.parse(loggedinUser) : {}
  );

  const logoutUser = (id: number) => {
    if (user.id === id) {
      localStorage.removeItem("user");
      redirect("/auth/login");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
