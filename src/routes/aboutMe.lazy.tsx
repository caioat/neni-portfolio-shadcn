import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/aboutMe")({
  component: AboutMe,
});

function AboutMe() {
  return <div className="p-2">Hello from About!</div>;
}
