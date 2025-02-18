import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import vetSystemCard from "../assets/vet_system_card.svg";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div>captain image</div>
      <div>
        <p>Highlight projects</p>
        <Card className="flex justify-between bg-foreground text-white">
          <div className="w-[50%]">
            <CardHeader>
              <CardTitle className="text-2xl">
                Creating a Veterinary System for the Biggest Pet Shop in Brazil.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md">Ecommerce Company</p>
              <Button
                variant="ghost"
                className="text-sm font-light border-1 border-white"
                asChild
              >
                <a href="mailto:cm.carolmiguel@gmail.com">
                  View case <MoveRight />
                </a>
              </Button>
            </CardContent>
          </div>
          <div>
            <img src={vetSystemCard} alt="" className="h-full rounded-br-lg" />
          </div>
        </Card>
      </div>
    </>
  );
}
