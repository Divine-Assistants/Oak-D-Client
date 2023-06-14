import React, { createContext, useState } from 'react'
  
type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export type GlobalContextType = {
 glotrail: number;
  setGlotrail: React.Dispatch<React.SetStateAction<number>>
  selectedDepartureProvince: string;
  setSelectedDepartureProvince: React.Dispatch<React.SetStateAction<string>>;
  selectedArrivalProvince: string;
  setSelectedArrivalProvince: React.Dispatch<React.SetStateAction<string>>;
  showVideo: boolean;
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;

};

export const GlobalContext = createContext<GlobalContextType>({
   glotrail: 0, setGlotrail: () => { },
    selectedDepartureProvince: "", setSelectedDepartureProvince: () => { },
    selectedArrivalProvince: "", setSelectedArrivalProvince: () =>{},
    showVideo: false, setShowVideo: ()=>{},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
    const [glotrail, setGlotrail] = useState(0);
    const [selectedDepartureProvince, setSelectedDepartureProvince] = useState('');
    const [selectedArrivalProvince, setSelectedArrivalProvince] = useState('');
    const [showVideo, setShowVideo] = useState(false)
  return (
    <GlobalContext.Provider value={{ 
      glotrail, setGlotrail, 
       selectedDepartureProvince, setSelectedDepartureProvince, 
       selectedArrivalProvince, setSelectedArrivalProvince,
       showVideo, setShowVideo 
       }}>
      {children}
    </GlobalContext.Provider>
  );
};