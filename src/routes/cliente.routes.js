import { Router} from "express";
import { getclientes,getcliente, createcliente, updatecliente, deletecliente } from '../controllers/cliente.controllers.js';

const router = Router ()

router.get('/cliente', getcliente)

router.get('/cliente/:cedula', getclientes)

router.post('/cliente',createcliente )

router.put('/cliente', updatecliente )

router.delete('/cliente/:cedula',deletecliente )

export default router