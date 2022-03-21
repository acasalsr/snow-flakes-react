export function Floc({ floc }) {
  const style = {
    top: `${floc.x}%`,
    left: `${floc.y}%`,
    position: "absolute",
  };
  return <span style={style}>❄</span>;
}
