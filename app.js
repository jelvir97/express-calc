const express = require('express')
const { mean, median, mode } = require('./helpers')

const app = express()

app.get('/mean', (req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }

    const m = mean(nums)

    res.send(`MEAN: ${m}`)
})

app.get('/median',(req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }
    const m = median()
    res.send(`MEDIAN - ${m}`)
})

app.get('/mode',(req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }

    const m = mode(nums)
    res.send(`MODE: ${m}`)    
})

app.listen(3000, function(){
    console.log('SERVER RUNNING on port 3000')
})