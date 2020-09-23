const modelSerie = require('./model');

async function addSerie(serie){
    const values = [serie.nombre,serie.descripcion, serie.protagonistas];
    const insertSerie = await modelSerie.connection.query(`INSERT INTO serie(nombre, descripcion, protagonistas) VALUES($1, $2, $3) returning id`,values)
    .then(res => {
      return res.rows[0].id;
    })
    .catch(e => console.error(e.stack));
      return insertSerie;

}

async function getSerie(){
    const serie = await modelSerie.connection.query('SELECT * FROM serie ORDER BY id')
    .then(res => {
        return res.rows;
    });
return serie;

}
async function getSeriebyId(id){
    const serie = await modelSerie.connection.query(`SELECT * FROM serie WHERE id = ${id}`)
    .then(res => {
        return res.rows[0];
    });
return serie;

}
async function putSerie(id,updateserie){
    const values = [updateserie.descripcion, updateserie.nombre, updateserie.protagonistas,id];
    const consulta = modelSerie.connection.query(`SELECT * FROM serie WHERE id = ${id}`).then(res=>{
        return res.rows[0];
    });
    if(consulta!=null){
        const serie = await modelSerie.connection.query(`UPDATE serie SET
        descripcion = $1,
        nombre = $2,
        protagonistas = $3 
        WHERE id = $4 returning id`,values)
        .then((rest) => {
                console.log("m",rest.rows[0])
                return rest.rows[0];
        });
        return serie;
    }
    else{
        return -1;
    }
    

   
}
function deleteSerie(id){
    console.log("id "+id);
    const serieBorrado = modelSerie.connection.query(`DELETE FROM serie WHERE id=${id} returning id`).then((res)=>{
        if(res.rowCount>0){
            return res.rows[0].id;
        }else{
            return -1;
        }
        
    }).catch();
    return serieBorrado;

}
module.exports={
    add: addSerie,//ya
    list: getSerie,//ya
    getOne: getSeriebyId,
    put: putSerie,
    delete: deleteSerie
}