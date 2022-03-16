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
                name: `1.Crear una tarea`
            },

            {
                value: '2',
                name: `2.Listar tareas`,
            },

            {
                value: '3',
                name: `3.Listar tareas completadas`,
            },

            {
                value: '4',
                name: `4.Listas tareas pendientes`,
            },

            {
                value: '5',
                name: `5.Completar tareas`,
            },

            {
                value: '6',
                name:  `6.Borrar tarea`,
            },

            {
                value: '0',
                name: `0.Salir`
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
    console.log('  Seleccione una opción '.green)
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

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput
} 