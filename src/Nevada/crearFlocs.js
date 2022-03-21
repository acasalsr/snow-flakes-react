import { TotalNumeroFlocs } from "./Constants";

export function crearFlocs() {
  const numeroFlocs = [];
  for (let i = 0; i < TotalNumeroFlocs; i++) {
    numeroFlocs.push(crearFloc());
  }
  return numeroFlocs;
}
function crearFloc() {
  return { x: -10 - TotalNumeroFlocs * Math.random(), y: 100 * Math.random() };
}
