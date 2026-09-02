import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export const ContactMe = (props: {
  image: string;
  mediumImage: string;
  mediumIcon?: ReactNode;
  name: string;
  description?: string;
  url?: string;
}) => {
  return (
    <Link href={props.url || "#"}>
      <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 group transition-colors">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <span className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full overflow-hidden">
            {props.mediumIcon ?? (
              <img
                src={props.mediumImage}
                alt={props.name}
                className="w-full h-full object-contain"
              />
            )}
          </span>
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mr-4"
          size={16}
        />
      </Card>
    </Link>
  );
};
