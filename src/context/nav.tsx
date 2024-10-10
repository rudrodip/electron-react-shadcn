import { createContext, useContext, useState } from "react";

type NavContextType = {
  current: string;
  setCurrent: (value: string) => void;
};

export const NavContext = createContext<NavContextType>({
  current: "home",
  setCurrent: () => {},
});

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
};

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState("home");
  return (
    <NavContext.Provider value={{ current, setCurrent }}>
      {children}
    </NavContext.Provider>
  );
};
