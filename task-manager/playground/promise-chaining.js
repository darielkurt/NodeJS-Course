require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ec3e1696dc4314570d2773e

// User.findByIdAndUpdate('5ec3e3725fc63a72786df6de', { age: 20 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 20 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5ec3e3725fc63a72786df6de', 30).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})