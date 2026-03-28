"use client";

import type { ReactNode } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const user = "Harshumathi";
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
