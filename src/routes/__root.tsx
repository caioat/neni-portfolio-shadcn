import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="relative flex min-h-svh flex-col bg-background">
        <div className="flex flex-1 flex-col">
          <Header />
          <div className="container-wrapper pt-16 pb-16">
            <Outlet />
          </div>
          <Footer />
          <TanStackRouterDevtools />
        </div>
      </div>
    </>
  ),
});
