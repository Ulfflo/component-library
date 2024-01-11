

export default function Button({ size, color, disabled }) {
  const buttonStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    border: "none", 
  };
  return (
    <>
      <button style={buttonStyle} disabled={disabled}>
        Click me
      </button>
    </>
  );
}
