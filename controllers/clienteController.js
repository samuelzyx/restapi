const Clientes = require('../models/Clientes/Clientes');

exports.nuevo = async (req, res, next) =>{
    const cliente = new Clientes(req.body);

    try {
        await cliente.save();
        res.json({mensaje:"Se agrego un nuevo cliente"});
    } catch(error){
        console.error(error);
        next();
    }
}

exports.clientePorId = async (req, res, next)=>{
    const cliente = await Clientes.findById(req.params.id);
    
    if(!cliente){
        res.json({mensaje:'Ese cliente no existe'})
        next()
    }
    
    res.json(cliente);
}

exports.listado = async (req, res, next)=>{
    try{
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error){
        console.error(error);
        next();
    }
}

exports.actualizar = async (req, res, next)=>{
    try{
        const cliente = await Clientes.findOneAndUpdate(
            {_id : req.params.id}, 
            req.body,
            {new: true}
            );
       
        res.json(cliente);
    } catch (error){
        console.error(error);
        next();
    }
}

exports.eliminar = async (req, res, next)=>{
    try{
        await Clientes.findOneAndDelete({_id : req.params.id});
       
        res.json({mensaje:'Ese cliente ha sido eliminado'})
    } catch (error){
        console.error(error);
        next();
    }
}