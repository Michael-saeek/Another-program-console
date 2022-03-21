const fs = require('fs')
const ruta = './almacenamiento/data.json'
require('colors')

const guardarTareas = ( data = '' ) => {

    fs.writeFileSync(ruta, JSON.stringify(data) )
}

const leerTareas = () => {
    
    if ( !fs.readFileSync(ruta) ) {
        return null;
    }
  
    const info = fs.readFileSync(ruta, { encoding: 'utf-8'} )
    const data = JSON.parse(info)

    return data
}

module.exports = {
    guardarTareas,
    leerTareas
}