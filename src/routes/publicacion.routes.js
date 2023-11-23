import { Router } from "express";
import { authRequiere } from "../middlewares/validateToken.js";
import {
    getPublicacion,
    getPublicaciones,
    createPublicacion,
    updatePublicacion,
    deletePublicacion
} from '../controllers/publicacion.controller.js'

import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPublicacionSchema } from "../schemas/publicacion.schema.js";

const router = Router()

router.get('/publicaciones', authRequiere, getPublicaciones )
router.get('/publicacion/:id', authRequiere, getPublicacion )


router.post('/publicaciones', authRequiere, validateSchema(createPublicacionSchema), createPublicacion )

router.delete('/publicacion/:id', authRequiere, deletePublicacion )

router.put('/publicacion/:id', authRequiere, updatePublicacion )


export default router