const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retornando um pedidos'


    })

});

/*retorna todos os produtos*/

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'pedido criado'


    })

});

router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos

    if (id === 'pedidos especiais') {
        res.status(200).send({
            mensagem: 'pedidos detalhados ',
            id_pedidos: id
        })

    } else {
        res.status(200).send({
            mensagem: 'continue procurando',
            id: id
        })

    }

});

/*excluir o pedidos*/

router.delete('/',(req, res, next)=>{
res.status(201).send({
    mensagem: 'pedidos excluidos'    
})

})

module.exports = router;
