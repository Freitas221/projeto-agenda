exports.middleware = (req, res, next) => {
    if(req.body.cliente) {
        console.log()
        console.log(`Objeto postado ${req.body.cliente}`)
    }
    next()
}

exports.middlewareGlobal = (req, res, next) => {
    console.log(req.session.usuario)
    next()
}

exports.checkCsrf = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.send('BAD CSRF')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}