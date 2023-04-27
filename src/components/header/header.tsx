import Nav from "../Navi/Nav";
import { headerListItems as listItems } from "../../data/data";

const Header = () => {

  return (
    <header className="h-24 bg-white flex flex-col items-center sm:flex-row sm:justify-between">
      <Nav listItems={listItems} />
    </header>
  );
};

export default Header;
