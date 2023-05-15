/*
    Event Routes
    host + /api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT);

router.get("/", getEvento);

router.post(
    "/",
    [
        check("title", "El título es obligatorio").not().isEmpty(),
        check("start", "Fecha de inicio es obligatoria").isDate(), // start 2020-07-12
        check("end", "Fecha de finalización es obligatoria").isDate(), // end 2020-07-12
        validarCampos
    ],
    crearEvento);

router.put("/:id", actualizarEvento );

router.delete("/:id", eliminarEvento );




module.exports = router;