
function mean(nums){
    let sum = 0
    for(let x in nums){
        sum += nums[x]
    }

    return sum/nums.length
}

function median(nums){
    if(nums.length%2 ==0){
        return(nums[Math.floor(nums.length/2) -1 ] + nums[Math.floor(nums.length/2)]) / 2
    }else{
        return nums[Math.floor(nums.length/2)]
    }
}

function mode(nums){
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
        

        if(bag[num]===bag.highCount) bag.modes.push(num)
        if(bag[num]>bag.highCount){
            bag.modes = []
            bag.modes.push(num)
            bag.highCount = bag[num]
        }
    }
    return bag.modes
}

module.exports = {mean, median, mode}