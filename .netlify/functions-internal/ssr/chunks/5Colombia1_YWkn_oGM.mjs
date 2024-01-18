export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/5Colombia1_GA3bnbYu.mjs').then(n => n._);

export { page };
