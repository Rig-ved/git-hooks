const mult = require('../src/mult')

it('should return correct multiplication',()=>{
    const result =  mult(10,20)
    expect(result).toBe(200)
})