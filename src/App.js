import FlipCard from "./FlipCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const cards = [
  {
    id: "1",
    variant: "hover",
    front: { title: "Hover", background: "ice-climbing.jpg" },
    back: {
      image: "ice-tool.jpg",
      brand: "Petzl",
      name: "Quark Ice Tool",
      price: 259.95
    }
  },
  {
    id: "2",
    variant: "click",
    front: { title: "Click", background: "rock-climbing.jpg" },
    back: {
      image: "climbing-helmet.jpg",
      brand: "Black Diamond",
      name: "Vapor Climbing Helmet",
      price: 139.95
    }
  },
  {
    id: "3",
    variant: "focus",
    front: { title: "Focus", background: "slacklining.jpg" },
    back: {
      image: "slackline.jpg",
      brand: "Barefoot",
      name: "Slackline",
      price: 39.99
    }
  }
];

export default function App() {
  return (
    <div className="container">
      <div className="overlay-background" />
      <div className="overlay-border" />
      <div className="row h-100">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
