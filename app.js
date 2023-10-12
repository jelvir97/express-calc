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

app.get('/median',(req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }
    let median
    if(nums.length%2 ==0){
        median = (nums[Math.floor(nums.length/2)] + nums[Math.floor(nums.length/2)+1]) / 2
    }else{
        median = nums[Math.floor(nums.length/2)]
    }
    res.send(`${nums} - ${median}`)
})

app.listen(3000, function(){
    console.log('SERVER RUNNING on port 3000')
})