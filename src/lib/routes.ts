export const ROUTES = {
  en: {
    home: "/en",
    about: "/en/about",
    skills: "/en/skills",
    contact: "/en/contact",
    projects: "/en/projects",
    work: "/en/work",
  },
  fr: {
    home: "/fr",
    about: "/fr/a-propos",
    skills: "/fr/competences",
    contact: "/fr/contact",
    projects: "/fr/projets",
    work: "/fr/travail",
  },
  es: {
    home: "/es",
    about: "/es/sobre-mi",
    skills: "/es/habilidades",
    contact: "/es/contacto",
    projects: "/es/proyectos",
    work: "/es/trabajo",
  },
};

// Helper function to get routes dynamically based on the current locale
export const getRoutes = (locale: "en" | "fr" | "es") => ROUTES[locale];
