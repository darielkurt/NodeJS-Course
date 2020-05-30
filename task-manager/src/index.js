const app = require('./app')
const port = process.env.PORT

app.get('', (req, res) => {
    res.render('index', {
        title: 'To do list',
        name: 'Kurt Dariel'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})