import { Section } from "@/app/[locale]/home/_components/Section";

export const HeroSkills = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/119653418?v=4"
            alt="diarassouba mamadou"
            className="w-12 h-12 rounded-full maw-w-xs max-md:w-12"
          />
          <h1 className="font-caption font-bold text-2xl text-primary">
            Diarassouba Mamadou
          </h1>
        </div>
        <h3 className="text-3xl font-caption text-primary/60 italic mt-4">
          The tool I use everyday is my brain.
        </h3>
      </div>
    </Section>
  );
};
