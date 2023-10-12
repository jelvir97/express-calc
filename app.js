const express = require('express')
const { mean, median, mode } = require('./helpers')
const ExpressError = require('./expressError')

const app = express()

app.get('/mean', (req,res,next)=>{
    try{
        if(!req.query.nums) throw new ExpressError(`nums are required`,400)
        const nums = req.query.nums.split(',')
        for(let x in nums){
            console.log(nums[x])
            if(isNaN(nums[x])){
                throw new ExpressError(`${nums[x]} is not a valid number`,400)
            }
            nums[x] = +nums[x]
        }

            
        const m = mean(nums)
        res.json({operation:'mean', value:m})
    }catch(err){
        next(err)
    }

})

app.get('/median',(req,res,next)=>{
    try{
        if(!req.query.nums) throw new ExpressError(`nums are required`,400)
        const nums = req.query.nums.split(',')
        for(let x in nums){
            console.log(nums[x])
            if(isNaN(nums[x])){
                throw new ExpressError(`${nums[x]} is not a valid number`,400)
            }
            nums[x] = +nums[x]
        }

        const m = median(nums)
        res.json({operation:'median', value:m})

    }catch(err){
        next(err)
    }

})

app.get('/mode',(req,res,next)=>{
    try{
        if(!req.query.nums) throw new ExpressError(`nums are required`,400)
        const nums = req.query.nums.split(',')
        for(let x in nums){
            console.log(nums[x])
            if(isNaN(nums[x])){
                throw new ExpressError(`${nums[x]} is not a valid number`,400)
            }
            nums[x] = +nums[x]
        }
        const m = mode(nums)
        res.json({operation:'mode', value:m}) 
    }catch(err){
        next(err)
    }
})

app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
})

app.use((err,req,res,next)=>{
    let message = err.message
    let status = err.status ? err.status:500
    return res.status(status).json({
        error: {message, status}
      });
})

app.listen(3000, function(){
    console.log('SERVER RUNNING on port 3000')
})