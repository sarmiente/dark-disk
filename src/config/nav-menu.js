export const navItems = {
   
 links: [
  { 
    href: '/',
    title: 'Inicio'
  },
  { 
    href: '/nosotros', 
    title: 'Nosotros' 
  },
  { 
    href: '/precios', 
    title: 'Precios' 
  }
 ],

 dropMenu: [
    { 
      title: 'Soluciones',
      dropdown: [
        { 
          href: '/landing-pages', 
          title: 'Landing Pages',
          text: 'Speak directly to your customers',
          icon: "font"
        },
        { 
          href: '/blog', 
          title: 'Blog',
          text: 'Construye tu propio blog',
          icon: "close-book"
        },
        { 
          href: '/corporativa', 
          title: 'Corporativa',
          text: 'Speak directly to your customers',
          icon: "briefcase"
        },
        { 
          href: '/tienda-online', 
          title: 'eCommerce',
          text: 'Vende en linea tus productos y servicios.' ,
          icon: "store"
        },
        { 
          href: '/portafolios', 
          title: 'Portafolios',
          text: 'Muestra tu trabajo a los clientes.',
          icon: "open-book"
        },
      ]
    },
    
  ]
};


export const footerLinks = [
    {
        title: "Compañia",
        items: [
          { title: "Inicio", href: "/" },
          { title: "Precios", href: "/pricing" },
          { title: "Contacto", href: "/contacto" },
                
        ],
      },
      {
        title: "Recursos",
        items: [
          { title: "Portafolio", href: "/portafolio" },
          { title: "Soluciones", href: "/soluciones" },
          { title: "Explora", href: "/blog" },
        ],
      },
      {
        title: "Oferta",
        items: [
          { title: "Diseño y Desarrollo Web", href: "#features" },
          { title: "Aplicaciones a la medida", href: "#" },
          { title: "Dominio & Hosting", href: "#" },
          { title: "Optimizacion en Buscadores", href: "#" },
        ],
      },
      {
        title: "Legal",
        items: [
          { title: "Politica de Privacidad", href: "/politica-de-privacidad" },
          { title: "Terminos y condiciones", href: "/terminos-y-condiciones" },
          { title: "Cookies", href: "/cookies" },
        ],
      },
];