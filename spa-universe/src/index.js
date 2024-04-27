import { Router } from './router.js';

const router = new Router();



router.add('/', '/page/home.html');
router.add('/universo', '/page/universo.html');
router.add('/exploracao', '/page/exploracao.html');
router.add(404, '/page/404.html');

router.handle();

window.onpopstate = () => router.handle();

window.route = () => router.route();