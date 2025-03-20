import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface MiniCardProps {
  title: string;
  content: string;
  redirectLink: string;
  className?: string;
}

export const MiniCard = ({
  title,
  content,
  redirectLink,
  className,
}: MiniCardProps) => {
  return (
    <>
      <a href={redirectLink} target="_blank">
        <Card
          className={cn(
            "flex justify-between bg-secondary text-foreground",
            className
          )}
        >
          <div>
            <CardHeader className="pb-2 pr-0">
              <CardTitle className="text-md font-bold leading-5">
                {title}
              </CardTitle>
            </CardHeader>
            <CardFooter className="pr-0">
              <p className="text-md leading-5 text-sm">{content}</p>
            </CardFooter>
          </div>
          <div className="flex items-center justify-center p-4">
            <MoveRight className="text-purple" />
          </div>
        </Card>
      </a>
    </>
  );
};
