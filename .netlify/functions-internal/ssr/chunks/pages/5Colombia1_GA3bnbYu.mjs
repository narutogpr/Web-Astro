/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_rGwiYvv8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$3 = createAstro();
const $$HeaderButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="flex-row justify-center text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 
font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 
hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100"> ${renderSlot($$result, $$slots["antes"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["despues"])} </a>`;
}, "C:/Users/gabo/Documents/PaginaWeb/planetary-point/src/components/HeaderButton.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navegacion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navegacion;
  return renderTemplate`${maybeRenderHead()}<nav class="w-4/5 mx-auto flex flex-col items-center justify-between text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/" }, { "antes": ($$result2) => renderTemplate`<svg width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="White" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path> <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path> <path d="M10 12h4v4h-4z"></path> </svg>`, "default": ($$result2) => renderTemplate` 
Inicio
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/MapaMental" }, { "antes": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-indent-increase" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 6l-11 0"></path><path d="M20 12l-7 0"></path><path d="M20 18l-11 0"></path><path d="M4 8l4 4l-4 4"></path></svg>`, "default": ($$result2) => renderTemplate` 
Indice
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/about" }, { "antes": ($$result2) => renderTemplate`<svg width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path> </svg>`, "default": ($$result2) => renderTemplate` 
Colaboradores
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/Proyectos-sociales" }, { "default": ($$result2) => renderTemplate` 
Proyectos
`, "despues": ($$result2) => renderTemplate`<svg width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M5 8h4"></path> <path d="M9 16h4"></path> <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path> <path d="M14 9l4 -1"></path> <path d="M16 16l3.923 -.98"></path> </svg>` })} </nav>`;
}, "C:/Users/gabo/Documents/PaginaWeb/planetary-point/src/components/Navegacion.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  Astro2.props;
  return renderTemplate`<html lang="ES-MX" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Emprendimiento Social</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <header class="header" data-astro-cid-sckkx6r4> <div class="justify-center" data-astro-cid-sckkx6r4> <!-- Logotipo IPN --> <img src="src/IMG/logo-ipn.png" alt="Logotipo IPN" data-astro-cid-sckkx6r4> </div> <div class="header-main font-bold font-large text-4xl justify-center" data-astro-cid-sckkx6r4> <!-- Texto principal --> <h1 data-astro-cid-sckkx6r4>INSTITUTO POLITÉCNICO NACIONAL</h1> <h2 data-astro-cid-sckkx6r4>UNIDAD PROFESIONAL DE INGENIERÍA CIENCIAS SOCIALES Y ADMINISTRATIVAS</h2> </div> <div class="justify-center" data-astro-cid-sckkx6r4> <!-- Logotipo UPIICSA --> <img src="src/IMG/upiicsa-84945.png" alt="Logotipo UPIICSA" data-astro-cid-sckkx6r4> </div> </header> <div data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navegacion", $$Navegacion, { "data-astro-cid-sckkx6r4": true })} </div> <div data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> <div data-astro-cid-sckkx6r4> <header class="header" data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>Página desarrolada por la Sección de Estudios de Posgrado e Investigación</p> <p class="text-white" data-astro-cid-sckkx6r4> Diseñado por Gabriel Perez Rios</p> <p data-astro-cid-sckkx6r4>Av. Té 950, Granjas México, Iztacalco, 08400 Ciudad de México, CDMX</p> </header> </div> </body></html>`;
}, "C:/Users/gabo/Documents/PaginaWeb/planetary-point/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$5Colombia1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$5Colombia1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Emprendimiento" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-justify w-4/5 mx-auto bg-white p-5"> <iframe src="/paginashtml/5c/5Colombia.html" width="100%" height="600px">
</iframe> </div> ` })}`;
}, "C:/Users/gabo/Documents/PaginaWeb/planetary-point/src/pages/5Colombia1.astro", void 0);

const $$file = "C:/Users/gabo/Documents/PaginaWeb/planetary-point/src/pages/5Colombia1.astro";
const $$url = "/5Colombia1";

const _5Colombia1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$5Colombia1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _5Colombia1 as _ };
