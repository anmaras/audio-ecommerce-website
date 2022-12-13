import React, { useContext, useState } from 'react';

const MenuCartContext = React.createContext();

export const MenuCartProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <MenuCartContext.Provider
      value={{
        isMenuOpen,
        isCartOpen,
        toggleMenu,
        closeMenu,
        toggleCart,
        closeCart,
      }}
    >
      {children}
    </MenuCartContext.Provider>
  );
};

export const useMenuCartContext = () => {
  return useContext(MenuCartContext);
};
