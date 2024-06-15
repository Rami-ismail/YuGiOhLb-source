import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <Link to={"/home"}>YuGiOhLb</Link>
      <ul className="header-nav">
        <li>
          <Link to={"/sale"}>Cards for Sale</Link>
        </li>
        <li>
          <Link to={"/wanted"}>Wanted Cards</Link>
        </li>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
