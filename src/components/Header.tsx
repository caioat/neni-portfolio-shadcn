import { MainNav } from "./MainNav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="flex h-14 items-center">
          <MainNav />
          {/* TODO: <MobileNav /> */}
        </div>
      </div>
    </header>
  );
};
