import { Link } from "react-router-dom";
// import styles from "../NavBar/Navbar.module"
const Navbar = () => {
  return (
    <div>
     <nav>
      <Link to="Location">Location</Link>
      <Link to="Episode">Episode</Link>
      <Link to="Character">Character</Link>
        </nav>
    </div>
  );
};
export default Navbar;
