import { useEffect, useState } from "react";

const TotalNumeroFlocs = 10;

function crearFlocs() {
  const numeroFlocs = [];
  for (let i = 0; i < TotalNumeroFlocs; i++) {
    numeroFlocs.push(crearFloc());
  }
  return numeroFlocs;
}

function crearFloc() {
  return { x: -10 - 10 * Math.random(), y: 100 * Math.random() };
}

function moureFlocs(flocs) {
  return flocs.map(moureFloc);
}
function moureFloc(floc) {
  const x = floc.x + 5 * Math.random();
  return { ...floc, x };
}

export function Nevada() {
  const [flocs, setFlocs] = useState(crearFlocs);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setFlocs(moureFlocs);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  function Floc(floc) {
    return JSON.stringify(floc);
  }
  return (
    <>
      {flocs.map((floc) => (
        <>
          <Floc floc={floc} />
        </>
      ))}
    </>
  );
}

/* Min 13.45 */
