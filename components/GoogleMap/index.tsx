import loader from '@/utils/MapLoader';
import { useState, useEffect} from 'react';

interface MapProps {
    latitude: number;
    longitude: number;
}

export const ContactMap = ({ latitude, longitude }: MapProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    loader.load().then(() => {
      const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 10,
      };

      const newMap = new window.google.maps.Map(
        document.getElementById('map') as HTMLElement,
        mapOptions
      );

      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: newMap,
      });

      setMap(newMap);
    });
  }, [latitude, longitude]);

  return <div id="map" className='h-[400px]'></div>;
};