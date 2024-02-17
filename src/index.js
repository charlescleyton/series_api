const express = require('express')
const series = require('../model/series')

const app = express()
app.use(express.json())
const port = 3000

app.get('/', async(req, res) => {
    const serie = await series.findAll();
    res.send(serie);
})

app.post('/', async (req, res) => {
    const serie = await series.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        ano: req.body.ano,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url

    });
    res.send(serie);
})

app.delete('/:id', async (req, res) => {
    await series.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send('Serie Deletada com sucesso');
})

app.put('/', async (req, res) => {
    const serie = await series.update({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        ano: req.body.ano,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    }, {
        where: {
            id: req.body.id
        }
    });
    res.send('Serie Atualizada com sucesso');
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})