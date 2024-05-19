import { Router} from "express";
import { getlibro,getlibros, createlibros, updatelibros, deletelibros } from '../controllers/libros.controllers.js';

const router = Router ()

router.get('/libros', getlibros)

router.get('/libros/:id', getlibro)

router.post('/libros',createlibros )

router.put('/libros', updatelibros )

router.delete('/libros/:id',deletelibros )

export default router