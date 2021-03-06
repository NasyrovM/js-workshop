const Ajax = require('./async')
const axios = require('axios')

//jest.mock('axios')

describe('Ajax: echo', () => {
    test('should return value async', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe('some data')
    })

    test('should return value with promise', () => {
        Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        })
    })

    test('should catch error with promise', () => {
        Ajax.echo(null).catch(err => {
           expect(err).toBeInstanceOf(Error)
        })
    })

    test('should catch error async', async () => {
        try{
            await Ajax.echo(null)
        }catch(err){
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe('error')
        }
    })

})

describe('Ajax get', () => {

    let response
    let todos

    beforeEach(() => {
        todos = [
            {id:1, title:'Todo 1', completed: false}
        ]

        response = {
            data: {
                todos
            }
        }
    })

    test('return data from request', () => {
        //axios.get.mockReturnValue(response)

        return Ajax.get().then(data => expect(data.todos).toEqual(todos))
    })
})