import { Router } from 'express';
import controllerUser from '../controllers/ControllerUser';

const router = Router();
// Não deveria existir
// router.get('/mostratodos/', loginRequired, controllerUser.index); // Lista todos usuario
// router.get('/mostraum:id', controllerUser.show); // Lista usuario

router.post('/',controllerUser.create);


export default router;
