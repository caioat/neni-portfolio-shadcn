import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/illustration")({
  component: Illustration,
});

function Illustration() {
  return <>Text</>;
}
