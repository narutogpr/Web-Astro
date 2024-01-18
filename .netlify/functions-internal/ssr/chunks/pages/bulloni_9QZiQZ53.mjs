/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_rGwiYvv8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './5Colombia1_GA3bnbYu.mjs';

const $$Astro = createAstro();
const $$Bulloni = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Bulloni;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Emprendimiento" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-justify w-4/5 mx-auto bg-white p-5"> <iframe src="public/Ejemplos con empresas/Empresa 4 Bulloni delle Route.pdf" width="100%" height="600px">
</iframe> </div> ` })}`;
}, "C:/Users/gabo/Documents/PaginaWeb/planetary-point/src/pages/bulloni.astro", void 0);

const $$file = "C:/Users/gabo/Documents/PaginaWeb/planetary-point/src/pages/bulloni.astro";
const $$url = "/bulloni";

export { $$Bulloni as default, $$file as file, $$url as url };
