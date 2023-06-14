import React, { createContext, useContext, useMemo, useState } from 'react'

type BlogContextProviderProps = {
  children: React.ReactNode;
};

export type BlogContextType = {
  setSelectBp: React.Dispatch<React.SetStateAction<string>>;
  selectBp: string
};

export const BlogContext = createContext<BlogContextType>({selectBp:"", setSelectBp:()=>{}});

export const BlogContextProvider = ({
  children,
}: BlogContextProviderProps) => {
  const [selectBp, setSelectBp] = useState('');

  return (
    <BlogContext.Provider value={{ selectBp, setSelectBp }}>
      {children}
    </BlogContext.Provider>
  );
};