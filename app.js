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

app.get('/mode',(req,res)=>{
    const nums = req.query.nums.split(',')
    for(let x in nums){
        nums[x] = +nums[x]
    }

    let bag = {
        modes:[],
        highCount : 2
    }

    for(let num of nums){
        console.log(num)
        

        if(bag[num]) {
            bag[num]++
        }else{
            bag[num] = 1
        }
        
        console.log(bag[num])

        if(bag[num]===bag.highCount) bag.modes.push(num)
        if(bag[num]>bag.highCount){
            bag.modes = []
            bag.modes.push(num)
            bag.highCount = bag[num]
        }
    }

    res.send(bag)
    
})

app.listen(3000, function(){
    console.log('SERVER RUNNING on port 3000')
})