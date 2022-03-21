const inquirer = require('inquirer');
require('colors');


// Formato de como va a ser la vista en el terminal
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Criar tarefa`
            },

            {
                value: '2',
                name: `${'2'.green}. Listar tarefas`,
            },

            {
                value: '3',
                name: `${'3'.green}. Listar tarefas completadas`,
            },

            {
                value: '4',
                name: `${'4'.green}. Listar tarefas pendentes`,
            },

            {
                value: '5',
                name: `${'5'.green}. Completar tarefas`,
            },

            {
                value: '6',
                name:  `${'6'.green}. Apagar tarea`,
            },

            {
                value: '0',
                name: `${'0'.green}. Sair`
            }, 
             
        ]
    }
]

const preguntaPausa = [
    {
        type: 'input',
        name: 'opcion',
        message: `Presione ${'ENTER'.green} para continuar`,
    }
       
]


const inquirerMenu = async () => {
   
    console.log('========================'.green)
    console.log('  Seleccione una opción '.white)
    console.log('========================\n'.green)

   const { opcion } = await inquirer.prompt(preguntas)
   console.clear()
   return opcion
 

}

const inquirerPausa = async () => {

    const option = await inquirer.prompt(preguntaPausa)
    console.clear()
    return option

}

const leerInput = async () => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message: 'Agregue su tarea ! ',
          
            validate( value) {
                if (value.length === 0 ) {
                    return 'Por favor ingrese un valor'

                }

                return true;
            }
          
        }
    ]


    const { desc } = await inquirer.prompt(question)
    return desc
}

const borrarTareaMenu = async ( listArray = []) => {

    const choices = listArray.map( (tarea, id) => {

        let idNumber = `${id + 1}`.green
        
        return  {
            value: tarea.id,
            name: `${idNumber}. ${tarea.desc}`
        }
    })

    const question = [ 
        {
            type: 'list',
            name: 'id',
            message: 'Qual tarefa deseja apagar?',
            choices,
        }
    ] 

    const { id } = await inquirer.prompt(question)
    return id
}

const areYouSure = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        }
    ]

    const { ok } = await inquirer.prompt(question)
    return ok

}

const mostrarCheckList = async ( listArray = []) => {

    const choices = listArray.map( (tarea, id) => {

        let idNumber = `${id + 1}`.green
        
        return  {
            value: tarea.id,
            name: `${idNumber}. ${tarea.desc}`,
            checked: ( tarea.completadoEn ? true : false)
        }
    })

    const question = [ 
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ] 

    const { ids } = await inquirer.prompt(question)
    return ids
}



module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    borrarTareaMenu,
    areYouSure,
    mostrarCheckList
} 