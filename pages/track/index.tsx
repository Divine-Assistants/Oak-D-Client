import { Map, PageLayout, ParcelTrack, TrackLand } from "@/components";
import { TrackContext, TrackContextProvider } from "@/context/TrackWrapper";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useContext } from "react";

type dataProps = {
  uid: string;
  device_uid: string;
  file: string;
  captured: string;
  received: string;
  body: {
    temperature: number;
    voltage: number;
    status: string;
  };
  tower_location?: {
    when: string;
    latitude: number;
    longitude: number;
  };
  gps_location: {
    latitude: number;
    longitude: number;
  };
};

export default function Index() {
  const { track, setTrack, trackPage, setTrackPage } = useContext(TrackContext);
  return (
    <>
      <TrackContextProvider>
        <TrackLand />
        {/* <Map /> */}
        <ParcelTrack />

      </TrackContextProvider>
    </>
  );
}
