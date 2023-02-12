import { ReactNode, SetStateAction, createContext, useState } from "react";

const initialContext = {
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
};

export const NavigationContext = createContext(initialContext);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavigationContext.Provider>
  );
};
 