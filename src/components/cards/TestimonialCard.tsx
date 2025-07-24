import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  redirectLink: string;
  className?: string;
}

export const TestimonialCard = ({
  content,
  author,
  redirectLink,
  className,
}: TestimonialCardProps) => {
  return (
    <>
      <Card className={cn("bg-secondary text-foreground", className)}>
        <CardContent className="text-md leading-5 p-6">
          <p className="italic">{content} - </p>
          <p className="font-medium">{author}</p>
        </CardContent>
        <CardFooter>
          <a
            href={redirectLink}
            target="_blank"
            className="text-md text-purple p-0 focus-visible:outline-0 focus-visible:underline hover:underline"
          >
            <p className="flex items-center gap-2">
              View all on LinkedIn <MoveRight />
            </p>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};
