function expect( value ) {
    return {
        toBe: exp => {
            if(value == exp){
                console.log('Success')
            } else {
                console.error(`value is ${value} but expectation is ${exp}`);
            }
        }
    }
}


const sum = (a, b) => a + b;

const nativeNull = () => null;

// console.log(sum(1, 41));

module.exports = { sum, nativeNull}

// expect(sum(41, 1)).toBe(43);