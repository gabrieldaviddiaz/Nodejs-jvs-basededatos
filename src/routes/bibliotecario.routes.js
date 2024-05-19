import { Router} from "express";
import { getbibliotecarios,getbibliotecario, createbibliotecario, updatebibliotecario, deletebibliotecario } from '../controllers/bibliotecario.controllers.js';

const router = Router ()

router.get('/bibliotecario', getbibliotecario)

router.get('/bibliotecario/:cedula', getbibliotecarios)

router.post('/bibliotecario',createbibliotecario )

router.put('/bibliotecario', updatebibliotecario )

router.delete('/bibliotecario/:cedula',deletebibliotecario )

export default router