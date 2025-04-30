import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <Link href="/">
          <h1 className="text-lg font-bold text-primary hover:underline">
            couda.dm
          </h1>
        </Link>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          {/* <LocalSwitcher /> */}
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://github.com/coudacode"
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://www.facebook.com/diara.madou.5205"
          >
            <FacebookIcon size={12} className="text-foreground" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://www.linkedin.com/in/mamadou-diarassouba-558493239/"
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
