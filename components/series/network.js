const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/',(req,res) => {
    controller.getSerie().then((serieList) =>{
        response.successget(req, res, serieList,200);
    }).catch(e =>{
        response.error(res,res, 'Unexpected',500,e);
    });
});

router.get('/:id',(req,res) => {
    controller.getSeriebyId(req.params.id).then((serieList) =>{
         
        if(serieList!=null){
            response.successget(req, res, serieList,200);

        }
        else{
            response.error(res,res, "No se encontro el id" ,500,'No se encontro el id requerido');
        }
        
    }).catch(e =>{
        response.error(res,res, 'Unexpected',500,e);
    });
});

router.post('/',(req,res) => {
    controller.addSerie(req.body.descripcion, req.body.nombre,req.body.protagonistas).then(( )=>{
       
        response.successpost(req,res,'Serie creada correctamente',201);
    })
    .catch(e => {
        response.error(req,res,'La infomracion ingresada es invalida',400,e);
    });
    
});

router.put('/:id',(req,res) => {
    controller.putSerie(req.params.id,req.body.descripcion, req.body.nombre,req.body.protagonistas).then((update)=>{
        if(update != null){
            response.successpost(req,res,'Serie actualizada correctamente',201);
        }else{
            response.error(req,res,'No existe el id',500,'error');

        }
        
    })
    .catch(e => {
        response.error(req,res,'La infomracion ingresada es invalida o no existe el id',400,e);
    });
    
});
router.delete('/:id',(req,res)=>{
    controller.deleteSerie(req.params.id).then((serie) =>{
       if(serie!= -1){
        response.successpost(req, res, "La serie "+serie+" se ha eliminado",200);
       }else{
           response.error(res,res, 'Nos se ha encontrado el id',400,'error en delete network')
       }
            
    }).catch(e =>{
        response.error(res,res, 'Unexpected',500,e);
    });
});

module.exports = router;