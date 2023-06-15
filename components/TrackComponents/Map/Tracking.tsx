import React, {useEffect, useState} from 'react'

interface TrackingProps {
    distance: number;
    timeInHours: number;
}

const Tracking: React.FC<TrackingProps> = ({ distance, timeInHours}) => {
    const [dot, setDot] = useState<number[]>([]); //state to hold array of dots

    useEffect(() => {
        
        const interval =  setInterval(() => {
            setDot((prevDots) => {
                const nextDot = (prevDots.length + 1) *distance / 6; //calculate the postion of the next dot
                if (nextDot > distance ) {
                    clearInterval(interval); //stop adding dots once the total distance is covered
                }
                return [...prevDots, nextDot]; //add the next dot to the array of dots
            });

        }, (timeInHours / 6) * 60 * 60  * 1000) //time interval between each dot in milliseconds

        return () => {
            clearInterval(interval); //clean up the interval when the component unmounts
        }

    }, [distance, timeInHours])
    

  return (
    <div className='relative'>
        {/* map over the dots array and render a div for each dot */}
        {dot.map((dot) =>  (
            <div key={dot} className={`lg:border-2 lg:border-[#AC0108] lg:rounded-[40px] lg:px-[5px] lg:py-[4px] lg:translate-x-[-10px] lg:mt-[24px] lg:w-[20px] lg:h-[20px] lg:grid lg:place-items-center my-[50px]`}>
            <div className='bg-[#AC0108] w-[8px] h-[8px] rounded-full' /> 
            </div>
        ))}

    </div>
  )
}

export default Tracking
