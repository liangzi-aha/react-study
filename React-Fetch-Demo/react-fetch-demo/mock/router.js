const express = require('express');
const router = express.Router();

router.get('/list',(req,res)=>{
    res.send([
        {
            name:'亮亮',
            age:'18',
        },
        {
            name: '小明',
            age: '18',
        }
    ])
})

module.exports = router;