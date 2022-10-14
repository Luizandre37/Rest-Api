const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retornado todos  os pedidos '


    })

});

/*retorna todos os produtos*/

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Inserir todos os produtos'


    })

});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'você descobriu o id especial ',
            id: id
        })

    } else {
        res.status(200).send({
            mensagem: 'continue procurando',
            id: id
        })

    }

});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'produtos  alterado com sucesso'


    })

});

router.delete('/',(req, res, next)=>{
res.status(201).send({
    mensagem: 'produto excluido'    
})

})

module.exports = router;
