const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');



module.exports = {
    async insert (req, res){
        const usuario = await Usuario.create(req.body);
        return res.json(usuario);
    },
    async index (req, res){
        const {page} = req.query;
        const usuario = await Usuario.paginate({}, {page, limit: 5});
        return res.json(usuario);
    },
    async detalhes (req, res){
        const usuario=await Usuario.findById(req.params.id);
        return res.json(usuario);
    },
    async atualizar(req, res){
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(usuario);
    },
    async delete (req, res){
     await Usuario.findByIdAndRemove(req.params.id);
     return res.send();
        }
}