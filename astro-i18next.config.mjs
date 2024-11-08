{/*import type { AstroI18nextConfig } from "astro-i18next"; */}

export default  {
    defaultLocale: "es",
    locales: ["es", "en"],
    routes: {
      es: {
        nosotros: "nosotros",
        precios: "precio",
        contacto: "contacto",
      },
      en: {
        nosotros: "about",
        precios: "pricing",
        contacto: "contact-us",
        
      },      
    },
  };