import { Router} from "express";
import { getprestamos,getprestamo, createprestamo, updateprestamo, deleteprestamo } from '../controllers/prestamo.controllers.js';

const router = Router ()

router.get('/prestamo', getprestamo)

router.get('/prestamo/:id', getprestamos)

router.post('/prestamo',createprestamo )

router.put('/prestamo', updateprestamo )

router.delete('/prestamo/:id',deleteprestamo )

export default router