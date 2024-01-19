import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Wb0NuHmN.mjs';

const _page0  = () => import('./chunks/generic_mnT-rsax.mjs');
const _page1  = () => import('./chunks/index_fkv8LZJ9.mjs');
const _page2  = () => import('./chunks/emprendimientoJuridico_Z4FY_mrE.mjs');
const _page3  = () => import('./chunks/impacto-mercadotecnia_C8kPqshL.mjs');
const _page4  = () => import('./chunks/Proyectos-sociales_Fm9L1OM-.mjs');
const _page5  = () => import('./chunks/PerspectivasTeo_iB2E-XmF.mjs');
const _page6  = () => import('./chunks/Emprendimiento_TtWrYgG7.mjs');
const _page7  = () => import('./chunks/Objetivodirec_HMgXkEmo.mjs');
const _page8  = () => import('./chunks/OrigenPalabra_QMG0sMSC.mjs');
const _page9  = () => import('./chunks/ParabrisasPro_jXmX3ywS.mjs');
const _page10  = () => import('./chunks/baterias-lmv_XQj7_525.mjs');
const _page11  = () => import('./chunks/Perspectiva_P3lW4tQz.mjs');
const _page12  = () => import('./chunks/5Colombia1_YWkn_oGM.mjs');
const _page13  = () => import('./chunks/EmpDigital_c9a37zGy.mjs');
const _page14  = () => import('./chunks/MapaMental_OMV4cpgB.mjs');
const _page15  = () => import('./chunks/ModelosEmp_JhwzKiZP.mjs');
const _page16  = () => import('./chunks/bujes-bufa_dBgpEchZ.mjs');
const _page17  = () => import('./chunks/ModeloEmp_4CzCkXn1.mjs');
const _page18  = () => import('./chunks/cataploom_a1E8TzYX.mjs');
const _page19  = () => import('./chunks/Sabermas_81CZauX5.mjs');
const _page20  = () => import('./chunks/Resumen_5hLh16VH.mjs');
const _page21  = () => import('./chunks/Turismo_hRLwOJMi.mjs');
const _page22  = () => import('./chunks/airlife_MkVH4fsT.mjs');
const _page23  = () => import('./chunks/bulloni_fWB4Unkn.mjs');
const _page24  = () => import('./chunks/about_nKUxeFed.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/emprendimientoJuridico.astro", _page2],["src/pages/impacto-mercadotecnia.astro", _page3],["src/pages/Proyectos-sociales.astro", _page4],["src/pages/PerspectivasTeo.astro", _page5],["src/pages/Emprendimiento.astro", _page6],["src/pages/Objetivodirec.astro", _page7],["src/pages/OrigenPalabra.astro", _page8],["src/pages/ParabrisasPro.astro", _page9],["src/pages/baterias-lmv.astro", _page10],["src/pages/Perspectiva.astro", _page11],["src/pages/5Colombia1.astro", _page12],["src/pages/EmpDigital.astro", _page13],["src/pages/MapaMental.astro", _page14],["src/pages/ModelosEmp.astro", _page15],["src/pages/bujes-bufa.astro", _page16],["src/pages/ModeloEmp.astro", _page17],["src/pages/cataploom.astro", _page18],["src/pages/Sabermas.astro", _page19],["src/pages/Resumen.astro", _page20],["src/pages/Turismo.astro", _page21],["src/pages/airlife.astro", _page22],["src/pages/bulloni.astro", _page23],["src/pages/about.astro", _page24]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
