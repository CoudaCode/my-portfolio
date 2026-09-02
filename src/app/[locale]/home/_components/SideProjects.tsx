import { LucideIcon } from "lucide-react";
import Link from "next/link";
type SideProjectsProps = {
  title: string;
  description: string;
  Logo?: LucideIcon;
  logoUrl?: string;
  url: string;
};
export const SideProjects = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground size-10 shrink-0 flex items-center justify-center rounded-sm overflow-hidden">
        {props.logoUrl ? (
          <img
            src={props.logoUrl}
            alt={`Logo ${props.title}`}
            className="w-full h-full object-contain p-1"
          />
        ) : props.Logo ? (
          <props.Logo size={16} />
        ) : null}
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
