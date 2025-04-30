import { Section } from "@/app/[locale]/home/_components/Section";

export const SkillsMore = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div className="max-md:flex-col gap-4 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 xl:gap-10 xl:grid-cols-3">
        {ALLSKILLS.map((skill) => (
          <div className="flex flex-col gap-4 flex-1" key={skill.title}>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight font-caption">
              {skill.title}
            </h3>
            <ul className="list-disc ml-4">
              {skill.items.map((item) => (
                <li key={item.title}>
                  <a
                    className="hover:underline hover:text-primary"
                    href={item.url}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ALLSKILLS = [
  {
    title: "Backend Skills",
    items: [
      {
        title: "Node.js",
        description: "I love Node.js, I use it to create backend APIs.",
        url: "https://nodejs.org/en/",
      },
      {
        title: "Express.js",
        description: "I love Express.js, I use it to create backend APIs.",
        url: "https://expressjs.com/",
      },
      {
        title: "Adonisjs",
        description: "I love Adonisjs, I use it to create backend APIs.",
        url: "https://adonisjs.com/",
      },
      {
        title: "Nest.js",
        description: "I love Nest.js, I use it to create backend APIs.",
        url: "https://nestjs.com/",
      },
      {
        title: "Supabase",
        description: "I love Supabase, I use it to create backend APIs.",
        url: "https://supabase.com/",
      },
      {
        title: "PocketBase",
        description: "I love PocketBase, I use it to create backend APIs.",
        url: "https://pocketbase.io/",
      },
    ],
  },
  {
    title: "Frontend Skills",
    items: [
      {
        title: "React",
        description: "I love React, I use it to create frontend applications.",
        url: "https://reactjs.org/",
      },
      {
        title: "Next.js",
        description:
          "I love Next.js, I use it to create frontend applications.",
        url: "https://nextjs.org/",
      },
      {
        title: "Tailwind",
        description:
          "I love Tailwind, I use it to create frontend applications.",
        url: "https://tailwindcss.com/",
      },
      {
        title: "TypeScript",
        description:
          "I love TypeScript, I use it to create frontend applications.",
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "JavaScript",
        description:
          "I love JavaScript, I use it to create frontend applications.",
        url: "https://www.javascript.com/",
      },
      {
        title: "React Native",
        description:
          "I love React Native, I use it to create frontend applications.",
        url: "https://reactnative.dev/",
      },
      {
        title: "Flutter",
        description:
          "I love Flutter, I use it to create frontend applications.",
        url: "https://flutter.dev/",
      },
      {
        title: "Nuxt.js",
        description:
          "I love Nuxt.js, I use it to create frontend applications.",
        url: "https://nuxtjs.org/",
      },
      {
        title: "Vue.js",
        description: "I love Vue.js, I use it to create frontend applications.",
        url: "https://vuejs.org/",
      },
    ],
  },
  {
    title: "Database Skills",
    items: [
      {
        title: "MongoDB",
        description: "I love MongoDB, I use it to create backend APIs.",
        url: "https://www.mongodb.com/",
      },
      {
        title: "PostgreSQL",
        description: "I love PostgreSQL, I use it to create backend APIs.",
        url: "https://www.postgresql.org/",
      },
      {
        title: "MySQL",
        description: "I love MySQL, I use it to create backend APIs.",
        url: "https://www.mysql.com/",
      },
      {
        title: "Firebase",
        description: "I love Firebase, I use it to create backend APIs.",
        url: "https://firebase.google.com/",
      },
      {
        title: "Neon.tech",
        description: "I love Neon.tech, I use it to create backend APIs.",
        url: "https://neon.tech/",
      },
    ],
  },
  {
    title: "Code",
    items: [
      {
        title: "VS Code",
        description: "I love VS Code, I use it to create backend APIs.",
        url: "https://code.visualstudio.com/",
      },
      {
        title: "Git",
        description: "I love Git, I use it to create backend APIs.",
        url: "https://git-scm.com/",
      },
      {
        title: "GitHub",
        description: "I love GitHub, I use it to create backend APIs.",
        url: "https://github.com/",
      },
      {
        title: "GitLab",
        description: "I love GitLab, I use it to create backend APIs.",
        url: "https://gitlab.com/",
      },
    ],
  },
  {
    title: "Operating System",
    items: [
      {
        title: "Windows",
        description: "I love Windows, I use it to create backend APIs.",
        url: "https://www.microsoft.com/en-us/windows",
      },
      {
        title: "MacOS",
        description: "I love MacOS, I use it to create backend APIs.",
        url: "https://www.apple.com/macos",
      },
      {
        title: "Linux",
        description: "I love Linux, I use it to create backend APIs.",
        url: "https://www.linux.org/",
      },
    ],
  },
];
