import { Link } from "@tanstack/react-router";

export const MainNav = () => {
  return (
    <div className="hidden md:flex w-full justify-evenly items-baseline">
      <p>Carolina Miguel</p>

      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link to="/" className="[&.active]:font-bold">
          Design
        </Link>
        <Link to="/illustration" className="[&.active]:font-bold">
          Illustration
        </Link>
        <Link to="/aboutMe" className="[&.active]:font-bold">
          About me
        </Link>
        <Link to="/contact" className="[&.active]:font-bold">
          Contact
        </Link>
      </nav>
    </div>
  );
};
