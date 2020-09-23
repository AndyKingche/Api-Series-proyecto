const store = require('./store');

async function addSerie(descripcion,nombre,protagonistas){
    return new Promise((resolve,reject) =>{
        if(!descripcion || !nombre || !protagonistas){
            return reject("los datos son incorrectos");
        }
        const fullSerie = {
            id:null,
            descripcion: descripcion,
            nombre: nombre,
            protagonistas: protagonistas,
        };
        
        resolve(store.add(fullSerie));
    });

}
async function getSerie(){
    
 return new Promise((res,rej)=>{
     res(store.list());
 });

    }

async function getSeriebyId(id){
    
    return new Promise((res,rej)=>{
        res(store.getOne(id));
    }); 
       
 }

 function putSerie(id,descripcion,nombre,protagonistas){
    return new Promise((resolve,reject) =>{
        if(!descripcion || !nombre || !protagonistas){
            return reject("los datos son incorrectos");
        }
        const fullSerie = {
            descripcion: descripcion,
            nombre: nombre,
            protagonistas: protagonistas,
        };
        resolve(store.put(id,fullSerie));
        
        
    });
     
 }
function deleteSerie(id){
    
    return new Promise((res,rej)=>{
        res(store.delete(id).catch(e=>{console.log(e)}));
    }); 

}
 
module.exports = {
    addSerie,
    getSerie,
    getSeriebyId,
    putSerie,
    deleteSerie
};