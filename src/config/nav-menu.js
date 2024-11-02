export const navItems = {
  links: [
    { href: '/', title: 'Inicio' },
    { href: '/nosotros', title: 'Nosotros' },
    { href: '/precios', title: 'Precios' },
    { href: '/blog', title: 'Blog' },
  ],
  dropMenu: [
    {
      title: 'Soluciones',
      dropdown: [
        { href: '/diseno-desarrollo-web', title: 'Diseño y Desarrollo Web' },
        { href: '/identidad-corporativa', title: 'Manual de Identidad Corporativa' },
        { href: '/optimizacion-seo', title: 'Optimización en Motores de Búsqueda' },
      ]
    },
    
  ]
};



export const footerLinks = [
    {
        title: "Compañia",
        items: [
          { title: "Inicio", href: "/" },
          { title: "Precios", href: "/precios" },
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
          { title: "Manual de Identidad", href: "#" },
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