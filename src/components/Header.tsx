import { MainNav } from "./MainNav";

export const Header = () => {
  return (
    // <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <header className="top-0 z-50 w-full ">
      <div className="container-wrapper">
        <div className="grid h-[69px] content-center items-center">
          <MainNav />
          {/* TODO: <MobileNav /> */}
        </div>
      </div>
    </header>
  );
};
