import "./App.jsx";

export default function Card({ href, imgAlt, imgSrc, children, color, size }) {
  const cardStyle = {
    backgroundColor: color,
    width: size,
    borderRadius: "6px",
    color: "white",
  };

  const imageStyle = {
    borderRadius: "6px 6px 0 0",
    width: "100%",
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={imgSrc} alt={imgAlt} style={imageStyle} />

      <div className="card-content">{children}</div>
      <a href={href}></a>
    </div>
  );
}
