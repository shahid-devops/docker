const exp = require('express')
const app = exp();

app.get('/', (req,res) => {
    res.send('dummy data')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
