import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";
import underConstruction from "@/assets/under_construction.svg";

export const Route = createLazyFileRoute("/illustration")({
  component: Illustration,
});

function Illustration() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h2 className="mb-4">Page under construction</h2>
      <p className="text-xl text-center leading-6.5 mb-4">
        Sorry, this page is still under development, but it will be ready soon.
        In the meantime, check out my design work and find out more about me! 😊
      </p>
      <div className="mb-8">
        <Button variant="secondary" className="w-37 text-base" asChild>
          <Link to="/">Design cases</Link>
        </Button>
        <Button
          variant="ghostSecondary"
          className="ml-6 w-37 text-base"
          asChild
        >
          <Link to="/aboutMe">About me</Link>
        </Button>
      </div>
      <img src={underConstruction} alt="" />
    </div>
  );
}
