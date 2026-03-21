import { Link } from "react-router-dom";
import logo from "../assets/logo-header.svg";

const Logo = () => {
  return (
    <Link to="/" aria-label="Ir para a página inicial" className="inline-block">
      <img src={logo} alt="Digital Store Logo" width={253} height={44} />
    </Link>
  );
};

export default Logo;
