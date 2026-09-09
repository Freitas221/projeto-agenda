const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    if(req.session.user) return res.render('contato', {
        contato: {}
    })
    return res.render('login')
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
            return res.redirect(`/contato/${contato.contato._id}` )
        })    
            
    }catch(e) {
         console.log(e)
        return res.render('404')
    }
}

exports.editContact = async function(req, res) {
    const contato = new Contato(req.body)

    if(!req.params.id) return res.render('404')
    
    await contato.buscaId(req.params.id)
    if(!contato) return res.render('404')
        
    res.render('contato', { contato })
} 
