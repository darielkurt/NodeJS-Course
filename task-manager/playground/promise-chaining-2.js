require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ec3e4c0d3b1ef25d86117c1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ec3e4dfe072af6e54e02d54').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})