import Card from "./Card.jsx";
import Badge from "./Badge.jsx";
import Alert from "./Alert.jsx";
import Button from "./Button.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <h2>Button</h2>
      <Button size={90} color="yellow" disabled={false} />
      <h2>Alert</h2>
      <Alert size={450} color="blue" icon="icon" />
      <h2>Badge</h2>
      <Badge size={30} color="pink" icon="star" />
      <h2>Card</h2>
      <Card
        size={200}
        color="green"
        imgSrc="papegojor.jpg"
        imgAlt="two parrots"
      >
        <h3>Parrot</h3>
        <p>
          Parrots are conformed by four families that contain roughly 410
          species in 101 genera, found mostly in tropical and subtropical
          regions..
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Parrot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </Card>
    </>
  );
}
