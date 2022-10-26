const express = require('express')

const router = express.Router()
router.get('/', (req, res, next) => {

    if (Object.keys(req.query).length === 0) {
        let random = Math.random()
        let random2= Math.random()
        res.contentType(`text/html`)
        res.render(`computation`, { value: `hypot applied to ${random},${random2} is ${Math.hypot(random,random2)} ,
        ceil applied to ${random} is ${Math.ceil(random)},
        clz32 applied to ${random} is ${Math.clz32(random)}` })
    } else{
        for (let a in req.query) {
            res.render(`computation`, { value: `hypot applied to ${req.query[a]} is ${Math.hypot(req.query[a])} ,
            ceil applied to ${req.query[a]} is ${Math.ceil(req.query[a])},
            clz32 applied to ${req.query[a]} is ${Math.clz32(req.query[a])}` })

        }
    }
})



module.exports = router