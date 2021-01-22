const User = require('../models/User')

module.exports = {
    index(req, res) {
        return res.render("index")
    },
    create(req, res) {
        return res.render("create")
    },
    show(req, res) {
        User.find(req.params.id, function(user) {
            if(!user) return res.send("User not Found!")
            return res.render('show', {user})
        })
    },
    post(req, res) {
        User.create(req.body, function(user){
            return res.redirect(`/user/${user.id}`)
        })
    },
    put(req, res) {
        User.update(req.body, () => {
            return res.redirect(`/user/${req.body.id}`)
        })
        
    },
    delete(req, res) {
        User.delete(req.body.id)
        return res.redirect('/')
    }

}