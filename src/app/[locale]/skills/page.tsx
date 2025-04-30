import { Header } from "../home/_components/Header";
import { Spacing } from "../home/_components/Spacing";
import { HeroSkills } from "./_components/HeroSkills";
import { SkillsMore } from "./_components/SkillsMore";

export default function Skills() {
  return (
    <>
      <main>
        <Header />
        <Spacing size="md" />
        <HeroSkills />
        <Spacing size="md" />
        <SkillsMore />
        <Spacing size="md" />
      </main>
    </>
  );
}
