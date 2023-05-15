
const { response } = require("express")


const getEvento = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'getEvento'
    })

}

const crearEvento = (req, res = response) => {

    // verificar que tenga el evento
    console.log(req.body);

    res.json({
        ok: true,
        msg: 'crearEvento'
    })
}

const actualizarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarEvento'
    })
}

const eliminarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarEvento'
    })
}


module.exports = {
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}