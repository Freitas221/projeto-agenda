const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato')
}

exports.register = async (req, res) => {
    try {
        const contato  = new Contato(req.body)
        await contato.register()


        if(contato.errors.length > 0) {
        req.flash('errors', contato.errors)
                req.session.save(() => {
                return res.redirect(req.get('Referrer' || 'back'))
                })
                return   
            }

            req.flash('success', 'Contato criado com sucesse')
            req.session.save(() => {
                return res.redirect(req.get('Referrer' || 'back'))
            })   
        }catch(e) {
            console.log(e)
            return res.render('404')
    }
}