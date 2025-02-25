import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface ProjectHighlightCardProps {
  title: string;
  content: string;
  image: string;
  redirectLink: string;
}

export const ProjectHighlightCard = ({
  title,
  content,
  image,
  redirectLink,
}: ProjectHighlightCardProps) => {
  return (
    <>
      <Card className="flex justify-between bg-foreground text-white">
        <div className="w-[392px]">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md leading-5">{content}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-light border-1 border-white"
              asChild
            >
              <a href={redirectLink} target="_blank">
                View case <MoveRight />
              </a>
            </Button>
          </CardFooter>
        </div>
        <div>
          <img src={image} alt="" className="rounded-br-3xl" />
        </div>
      </Card>
    </>
  );
};
