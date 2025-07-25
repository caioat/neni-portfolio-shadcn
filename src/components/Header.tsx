import useWindowDimensions from "./hooks/useWindowDimensions";
import { MainNav } from "./MainNav";

export const Header = () => {
  const { width } = useWindowDimensions();

  return (
    // <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <header className={`top-0 z-50 w-full ${width < 912 ? "hidden" : ""}`}>
      <div className="container-wrapper">
        <div className="grid h-[69px] content-center items-center">
          <MainNav />
          {/* TODO: <MobileNav /> */}
        </div>
      </div>
    </header>
  );
};
