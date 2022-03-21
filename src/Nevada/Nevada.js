import { useEffect, useState } from "react";
import { FrameRate } from "./Constants";
import { crearFlocs } from "./crearFlocs";
import { Floc } from "./Floc";
import { moureFlocs } from "./moureFlocs";

export function Nevada() {
  const [flocs, setFlocs] = useState(crearFlocs);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setFlocs(moureFlocs);
    }, 1000 / FrameRate);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      {flocs.map((floc, index) => (
        <Floc key={index} floc={floc} />
      ))}
    </>
  );
}
