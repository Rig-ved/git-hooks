const sum = require('../src/sum')

it('should return correct sum',()=>{
    const result =  sum(10,20)
    expect(result).toBe(30)
})