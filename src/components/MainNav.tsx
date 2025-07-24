import { Link } from "@tanstack/react-router";

export const MainNav = () => {
  return (
    <div className="hidden md:flex w-full justify-between items-baseline">
      <p className="font-bold">Carolina Miguel</p>

      <nav className="flex items-center gap-4 xl:gap-6">
        <Link
          to="/"
          className="[&.active]:text-purple [&.active]:underline focus-visible:outline-0 focus-visible:underline hover:underline"
        >
          Design
        </Link>
        <Link
          to="/illustration"
          className="[&.active]:text-purple [&.active]:underline focus-visible:outline-0 focus-visible:underline hover:underline"
        >
          Illustration
        </Link>
        <Link
          to="/aboutMe"
          className="[&.active]:text-purple [&.active]:underline focus-visible:outline-0 focus-visible:underline hover:underline"
        >
          About me
        </Link>
      </nav>
    </div>
  );
};
