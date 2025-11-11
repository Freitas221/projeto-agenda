exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Marcos gostoso demais',
        numeros: [0, 1, 2, 3, 4, 5, 6]
    })
    return;
}

exports.extraData = (req, res, next) => {
    res.send(req.params)
    return;
}

exports.submitForm = (req, res, next) => {
    res.send(req.body)
    return;
}