import { TrackContextProvider } from '@/context/TrackWrapper';
import { UserContext, UserContextProp } from '@/context/UserInformation';
import { useState } from 'react';
import '@/styles/globals.css';
import { ChakraBaseProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { FaIcons } from "react-icons/fa";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserContextProp | undefined>(undefined);

  return (
    <UserContext.Provider value={{user, setUser}}>
    <TrackContextProvider>
    <ChakraBaseProvider>
          <Component {...pageProps} />
    </ChakraBaseProvider>
    </TrackContextProvider>
    </UserContext.Provider>
  ) 
}
