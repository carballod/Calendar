/*
    Event Routes
    host + /api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT);

router.get("/", getEvento);

router.post("/", crearEvento);

router.put("/:id", actualizarEvento );

router.delete("/:id", eliminarEvento );




module.exports = router;