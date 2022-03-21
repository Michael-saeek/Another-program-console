require('colors')

const { 
    inquirerMenu, 
    inquirerPausa, 
    leerInput, 
    borrarTareaMenu,
    areYouSure,
    mostrarCheckList
} = require('./helpers/inquirer')
const { Tareas } = require('./models/tareas')

const { guardarTareas, leerTareas } = require('./helpers/guardarTareas')
//const { pausa } = require('./helpers/mensajes')

const main = async () => {

let opt = ''
let id = ''
const mainTareas = new Tareas() 
const tareasDB = leerTareas()

    if (tareasDB) {
        mainTareas.cargarTareasFromArray(tareasDB) // es una forma de actualizar las tareas en el archivo
    }

do {

    opt = await inquirerMenu()


    switch(opt) {
        case '1':
            const desc = await leerInput()
            mainTareas.crearTarea(desc)

        break;

        case '2':
            mainTareas.listadoCompleto()

        break;

        case '3':
            mainTareas.listarPendientesCompletadas()
        break;

        case '4':
            
            mainTareas.listarPendientesCompletadas(null)

        break;

        case '5':
            const ids = await mostrarCheckList(mainTareas.listAsArray)

            if (ids) {
                mainTareas.toggleCompletadas(ids)
            }
        

        break;

        case '6':
             id = await borrarTareaMenu(mainTareas.listAsArray)
             console.log({ id })
             const ok = await areYouSure('Você tem certeza de apagar essa tarefa?'.cyan)
             console.log(ok)

           
             if (ok == true) {
                mainTareas.borrarTarea(id)
             }
        
          
        break;
    }

    guardarTareas(mainTareas.listAsArray)
    await inquirerPausa()  
      
        
} while ( opt !== '0')



}

main();