const reverse = require('./reverse.js')

test('reversed', ()=> {
    expect(
      reverse('andres')
    ).toBe('serdna'); 
})