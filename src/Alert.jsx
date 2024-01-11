import { GoAlert } from "react-icons/go";

export default function Alert({ size, color, icon }) {
  const alertStyle = {
    backgroundColor: color,
    padding: "10px",
    borderRadius: "5px",
    width: size,
  };

  const iconStyle = {
    marginRight: "8px",
    verticalAlign: "middle",
  };

  const textStyle = {
    color: "white",
    verticalAlign: "middle",
  };

  const IconComponent = icon ? <GoAlert size={24} color="white" style={iconStyle} /> : null;

  return (
    <div style={alertStyle}>
      <p style={textStyle}>
        {IconComponent} Info Alert! Change a few things up and try submitting
        again.
      </p>
    </div>
  );
}