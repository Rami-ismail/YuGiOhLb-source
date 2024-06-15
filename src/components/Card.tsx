import { useState } from "react";

const DEFAULT_IMAGE =
  "https://static.wikia.nocookie.net/yugioh/images/e/e5/Back-EN.png";

const isValidUrl = (urlString: string) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

interface CardProps {
  name: string;
  set: string;
  image: string;
  price: string;
  quantity: string;
  person: string;
}

function Card({ name, set, image, price, quantity, person }: CardProps) {
  const [cardClassName, setClassName] = useState("card");

  return (
    <div
      className={cardClassName}
      onMouseEnter={() => setClassName("card-hover")}
      onMouseLeave={() => setClassName("card")}
    >
      <h2 className="card-title">
        {name} - {set}
      </h2>
      <img
        className="card-image"
        src={isValidUrl(image) ? image : DEFAULT_IMAGE}
      />
      <h3 className="card-price">
        {price == null
          ? person + " is looking for " + quantity
          : person + " is selling " + quantity + " for " + price + "$"}
      </h3>
    </div>
  );
}

export default Card;
