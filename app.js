const express = require('express')

const app = express()

app.get('/mean', (req,res)=>{
    const nums = req.query.nums.split(',')
    let sum = 0
    for(let x in nums){
        nums[x] = +nums[x]
        sum += nums[x]
    }

    res.send(`MEAN: ${sum/nums.length}`)
})

app.listen(3000, function(){
    console.log('SERVER RUNNING on port 3000')
})