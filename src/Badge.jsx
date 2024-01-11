import { GoStarFill } from "react-icons/go";

export default function Badge({ size, color, icon }) {
  const badgeStyle = {
    backgroundColor: color,
    padding: "10px",
    borderRadius: "50%",
    width: size,
    height: size,
    };

  const IconStar = icon ? (
    <GoStarFill size={size} color="white" />
  ) : null;

  return (
    <div style={badgeStyle}>
      {IconStar}
    </div>
  );
}
