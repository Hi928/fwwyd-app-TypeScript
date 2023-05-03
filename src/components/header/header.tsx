import { Navi } from "components/Navi/Navi";

export const Header = () => {
  return (
    <header className="h-24 bg-white flex flex-col items-center sm:flex-row sm:justify-between">
      <Navi />
    </header>
  );
};
