import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MoveRight } from "lucide-react";

interface AboutCardProps {
  title: string;
  content: string;
  image: string;
  redirectLink: string;
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
          "flex justify-between bg-secondary text-foreground",
          className
        )}
      >
        <div className="flex items-center pl-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={image} alt="me" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
              href={redirectLink}
              className="text-sm font-light text-purple p-0 hover:underline"
            >
              <p className="flex items-center gap-2">
                About me <MoveRight />
              </p>
            </a>
          </CardFooter>
        </div>
      </Card>
    </>
  );
};
