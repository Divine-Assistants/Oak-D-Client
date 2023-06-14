import React, { createContext, useState } from 'react'
  
type DomesticContextProviderProps = {
  children: React.ReactNode;
};

export type DomesticContextType = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  icon: string;
  setIcon: React.Dispatch<React.SetStateAction<string>>;
  paystatus: string;
  setPaystatus: React.Dispatch<React.SetStateAction<string>>; 
  trail: number;
  setTrail: React.Dispatch<React.SetStateAction<number>>
  selectedDepartureProvince: string;
  setSelectedDepartureProvince: React.Dispatch<React.SetStateAction<string>>;
  selectedArrivalProvince: string;
  setSelectedArrivalProvince: React.Dispatch<React.SetStateAction<string>>;
  showVideo: boolean;
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DomesticContext = createContext<DomesticContextType>({
    value: "", setValue: () => { },
    icon: "", setIcon: () => { },
    paystatus: "", setPaystatus: () => { },
    trail: 0, setTrail: () => { },
    selectedDepartureProvince: "", setSelectedDepartureProvince: () => { },
    selectedArrivalProvince: "", setSelectedArrivalProvince: () =>{},
    showVideo: false, setShowVideo: ()=>{},
});

export const DomesticContextProvider = ({
  children,
}: DomesticContextProviderProps) => {
    const [value, setValue] = useState("");
    const [icon, setIcon] = useState("");
    const [paystatus, setPaystatus] = useState("");
    const [trail, setTrail] = useState(0);
    const [selectedDepartureProvince, setSelectedDepartureProvince] = useState('');
    const [selectedArrivalProvince, setSelectedArrivalProvince] = useState('');
    const [showVideo, setShowVideo] = useState(false)

  return (
    <DomesticContext.Provider value={{ 
       value, setValue,
       icon, setIcon, 
       paystatus, setPaystatus, 
       trail, setTrail, 
       selectedDepartureProvince, setSelectedDepartureProvince, 
       selectedArrivalProvince, setSelectedArrivalProvince,
       showVideo, setShowVideo
       }}>
      {children}
    </DomesticContext.Provider>
  );
};