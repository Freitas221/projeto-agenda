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
                return res.redirect(req.get('Referrer') || '/contato')
            })
            return   
        }

        req.flash('success', 'Contato criado com sucesso')
        req.session.save(() => {
            return res.redirect(req.get('Referrer') || `/contato/${contato.contato._id}` )
        })    
            
    }catch(e) {
         console.log(e)
        return res.render('404')
    }
}

exports.editContact = async function(req, res) {
    if(!req.params.id) return res.render('404')
    
    const user = await Contato.buscaId(req.params.id)
    if(!user) return res.render('404')
        
    res.render('contato', { user })
} 
