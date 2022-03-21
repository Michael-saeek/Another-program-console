const Tarea = require('./tarea')
require('colors')

class Tareas {

    _listado = {}

    incompleto = 'Incompleta'
    completado = 'Completada'

    get listAsArray() {
        const listado = []
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado;
    }

    constructor() {
    this._listado = {}
 
    }

    borrarTarea( id = '') {

        if (this._listado[id]) {
            delete this._listado[id]
            console.log('Tarefa eliminada'.red)
        }
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    cargarTareasFromArray( tarea = [] ) {

        tarea.forEach( tarea => {
            this._listado[tarea.id] = tarea
            
        })
    }

    listadoCompleto() {
        this.listAsArray.forEach( (tarea, id) => {
            const idColor = `${id + 1}`.green
            const { desc, completadoEn } = tarea
            const estado = completadoEn == null ? this.incompleto.red : this.completado.green

            console.log( `${idColor} ${desc.blue} :: ${estado}` )
        })   
     }

     listarPendientesCompletadas ( completadas = true) {

    
       const tareasCompletadas = this.listAsArray.filter( tarea => tarea.completadoEn == completadas )

       tareasCompletadas.forEach( (tarea, id) => {
            const idColor = `${id + 1}`.green
            const { desc, completadoEn } = tarea
            const estado = completadoEn == null ? this.incompleto.red : this.completado.green

            console.log( `${idColor} ${desc.blue} :: ${estado}` )
       } )

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {
            const tarea = this._listado[id] // atualização por referencia ao objeto real

            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        });


        this.listAsArray.forEach( (tareas) => {

            if ( !ids.includes(tareas.id) ) { // 
                const tarea = this._listado[tareas.id]

                tarea.completadoEn = null;
            }

        })
    }
}


module.exports = {
    Tareas,
}