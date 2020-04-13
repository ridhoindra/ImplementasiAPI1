const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: 'HALO INI PESAN DEFAULT',
        data: null
    })
})

app.post('/', (req, res) => {
    if (req.body.message === undefined) {
        return res.json({
            status: false,
            message: 'Isi Pesan diperlukan',
            data: null
        })
    }
    return res.json({
        status: true,
        message: req.body.message,
        data: null
    })
})

app.listen(3000, () => {
    console.log('Berjalan diport 3000')
})