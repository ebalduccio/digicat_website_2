'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NavbarContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavbarContext = createContext<NavbarContextProps>({
  open: false,
  setOpen: () => {},
});

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ open, setOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
