import { Button } from "./ui/button";
import { MoveUp, MoveUpRight, Mail, Linkedin } from "lucide-react";
import owl1 from "../assets/owl_1.svg";

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-6 md:py-0 bg-foreground">
      <div className="container-wrapper">
        <div className="h-[378px]">
          <div className="flex justify-center">
            <Button
              size="icon"
              className="bg-purple hover:bg-purple/90 rounded-full relative top-[-24px] w-12 h-12"
              onClick={handleScrollToTop}
            >
              <MoveUp />
            </Button>
          </div>
          <div className="h-[300px] flex justify-between">
            <div className="text-white">
              <h2>
                Send me an email. Or a message. <s>Or an Owl.</s>
              </h2>
              <div className="pt-4">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-xl font-light border-1 border-white"
                  asChild
                >
                  <a href="mailto:cm.carolmiguel@gmail.com">
                    <Mail /> Email <MoveUpRight />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-xl font-light border-1 border-white ml-6"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/carolmiguel/"
                    target="_blank"
                  >
                    <Linkedin /> Message <MoveUpRight />
                  </a>
                </Button>
              </div>
              <div className="pt-16 text-md">
                <p className="font-semibold">
                  Brazilian living in Porto, Portugal
                </p>
                <p className="pt-2">
                  This portfolio was designed in Figma by me and developed by{" "}
                  <a
                    href="https://www.linkedin.com/in/caio-augusto-travagin"
                    target="_blank"
                    className="hover:underline"
                  >
                    Caio
                  </a>
                </p>
                <p className="pt-4 text-xs font-light">
                  Copyright © 2024 Carolina Miguel. All rights reserved.
                </p>
              </div>
            </div>
            <div>
              <img src={owl1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
