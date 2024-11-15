{/*import type { AstroI18nextConfig } from "astro-i18next"; */}

export default  {
    defaultLocale: "es",
    locales: ["es", "en"],
    routes: {
      es: {
        "nosotros": "nosotros",
        "precios": "precio",
        "contacto": "contacto",
        "soluciones": "soluciones",
        "politica-de-privacidad": "politica-de-privacidad",
        "terminos-y-condiciones" : "terminos-y-condiciones",
        "blog" : "blog"
      },
      en: {
        nosotros: "about",
        precios: "pricing",
        contacto: "contact-us",
        "soluciones": "soluciones",
        "politica-de-privacidad": "privacy-policy",
        "terminos-y-condiciones": "terms-and-conditions",
        "blog" : "blog"
      },      
    },
  };