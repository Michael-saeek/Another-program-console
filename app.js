require('colors')

const { 
    inquirerMenu, 
    inquirerPausa, 
    leerInput, 
} = require('./helpers/inquirer')
const { Tareas } = require('./models/tareas')
//const { pausa } = require('./helpers/mensajes')

const main = async () => {

const mainTareas = new Tareas() 
let opt = ''


do {

    opt = await inquirerMenu()
    console.log( opt )

    switch(opt) {
        case '1':
            const desc = await leerInput()
            mainTareas.crearTarea(desc)

        break;

        case '2':
            console.log(mainTareas._listado)

        break;

        case '3':

        break;

        case '4':

        break;

        case '5':

        break;

        case '6':

        break;
    }
    
    await inquirerPausa()  
      
        
} while ( opt !== '0')

}

main();