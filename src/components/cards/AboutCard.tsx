import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { AboutCardImage, AboutCardLink } from "./types/AboutCard.types";

interface AboutCardProps {
  title: string;
  content: string;
  image: AboutCardImage;
  redirectLink: AboutCardLink;
  className?: string;
}

export const AboutCard = ({
  title,
  content,
  image,
  redirectLink,
  className,
}: AboutCardProps) => {
  return (
    <>
      <Card
        className={cn(
          "flex justify-between bg-secondary text-foreground h-49",
          className
        )}
      >
        <div className="flex items-center">
          <img src={image.src} alt={image.alt} className={image.className} />
        </div>
        <div>
          <CardHeader className="pb-2">
            <CardTitle className="text-md leading-5">{title}</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <p className="text-md leading-5">{content}</p>
          </CardContent>
          <CardFooter>
            <a
              href={redirectLink.href}
              target={redirectLink.target}
              className="text-sm font-light text-purple p-0 hover:underline"
            >
              <p className="flex items-center gap-2">
                {redirectLink.text} <MoveRight />
              </p>
            </a>
          </CardFooter>
        </div>
      </Card>
    </>
  );
};
