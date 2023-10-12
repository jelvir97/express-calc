const express = require('express')
const { mean, median, mode } = require('./helpers')

const app = express()

app.get('/mean', (req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }
    const m = mean(nums)
    res.json({operation:'mean', value:m})
})

app.get('/median',(req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }
    const m = median(nums)
    res.json({operation:'median', value:m})
})

app.get('/mode',(req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }
    const m = mode(nums)
    res.json({operation:'mode', value:m})    
})

app.listen(3000, function(){
    console.log('SERVER RUNNING on port 3000')
})