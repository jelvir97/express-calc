const { mean, median, mode } = require('./helpers')

    test("testing mean()",()=>{
        expect(mean([1,2,3,4,5])).toEqual(3)
        expect(mean([6,7,8,9,10])).toEqual(8)
        expect(typeof mean([1,2,3])).toEqual('number')
    })

    test("testing median()", ()=>{
        expect(median([1,2,3,4,5])).toEqual(3)
        expect(median([1,2,3,4,5,6])).toEqual(3.5)
        expect(median([1,2,3,4,5,6,7,8,9,10])).toEqual(5.5)
        expect(typeof median([1,2,3])).toEqual('number')
    })

    test("test mode()", ()=>{
        expect(mode([1,2,3,3,3])).toEqual([3])
        expect(mode([1,2,3,2,4,2])).toEqual([2])
        expect(mode([1,1,2,3,4,4])).toEqual([1,4])
        expect(mode([1,2,3,4])).toEqual([])
    })