import { TrackerDataType } from "@/api/api";
import { trackDataType } from "@/components";
import React, { createContext, SetStateAction, useState } from "react";

export type TrackContextType = {
  track: {};
  setTrack: React.Dispatch<React.SetStateAction<string>>;
  inputValues: data;
  setInputValues: React.Dispatch<React.SetStateAction<data>>;
  verificationCode: string;
  setVerificationCode: React.Dispatch<React.SetStateAction<string>>;
  loginData: loginData;
  setLoginData: React.Dispatch<React.SetStateAction<loginData>>;
  trackPage: number; setTrackPage : React.Dispatch<React.SetStateAction<number>>;
  setUserDetail: React.Dispatch<React.SetStateAction<trackDataType>>;
  userDetail: trackDataType,
  setTrackId: React.Dispatch<React.SetStateAction<TrackerDataType>>;
  tracId: TrackerDataType;
  setProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  processing: boolean;
  setExist: React.Dispatch<React.SetStateAction<string>>;
  exist: string;
};

type TrackContextProviderProps = {
  children: React.ReactNode;
};

type data = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}

type loginData = {
  email: string,
  password: string,
}

export const TrackContext = createContext<TrackContextType>({
  track:{},setTrack:()=>{},
  inputValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
} , setInputValues:()=>{},
    verificationCode: '',
    setVerificationCode: ()=>{},
    loginData: {email: '', password: ''},
    setLoginData: ()=>{},
    trackPage: 0, setTrackPage: () => {},
    userDetail: {
      ETA: '',
      arrival: '',
      departure: '',
      packageType: '',
      sender: '',
      shipmentStatus:'',
  
  }, setUserDetail: () => {},
  tracId : {trackingID: ''}, setTrackId : () => {},
  processing: false , setProcessing : () => {},
  exist: '', setExist: () => {}

});

export const TrackContextProvider = ({
  children,
}: TrackContextProviderProps) => {
  const [track, setTrack] = useState('');
  const [inputValues, setInputValues] = useState<data>({firstName: '',lastName: '',email: '',password: '',confirmPassword: ''});
  const [verificationCode, setVerificationCode] = useState('');
  const [loginData, setLoginData] = useState<loginData>({email: '', password: ''})
  const [trackPage, setTrackPage] = useState(0);
  const [userDetail, setUserDetail] = useState <trackDataType>({
    ETA: '',
    arrival: '',
    departure: '',
    packageType: '',
    sender: '',
    shipmentStatus:'',

});
const [tracId, setTrackId] = useState<TrackerDataType>({
  trackingID: ''
})
const [processing, setProcessing] = useState(false)
const [exist, setExist] = useState('')

  return (
    <TrackContext.Provider value={{ track, setTrack,inputValues, setInputValues, verificationCode, setVerificationCode, loginData, setLoginData, trackPage, setTrackPage, userDetail, setUserDetail, tracId, setTrackId, processing, setProcessing, exist, setExist }}>
      {children}
    </TrackContext.Provider>
  );
};
