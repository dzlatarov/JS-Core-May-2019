const isOddOrEven = require('./02.EvenOrOdd');
const expect = require('chai').expect;

describe('isOddOrEven function tests', function () {
    describe('Correct!', function () {
        it('Should return even if the string length is even', function () {
            const value = 'come';

            const expected = 'even';
            const actual = isOddOrEven(value);

            expect(expected).to.be.equal(actual);
        });

        it('Should return odd if the string length is odd', function () {
            const value = 'hello';

            const expected = 'odd';
            const actual = isOddOrEven(value);

            expect(expected).to.be.equal(actual);
        });
    });

    describe('Not Correct!', function () {
        it('Should return undefined if input value is a number', function () {
            const value = 12;
    
            const expected = undefined;
            const actual = isOddOrEven(value);
    
            expect(expected).to.be.equal(actual);
        }); 
    
        it('Should return undefined if input value is an object', function () {
            const value = {name: 'Ivan', age: 25};
    
            const expected = undefined;
            const actual = isOddOrEven(value);
    
            expect(expected).to.be.equal(actual);
        }); 
    
        it('Should return undefined if input value is an array', function () {
            const value = [1, 2, 3, 4, 5];
    
            const expected = undefined;
            const actual = isOddOrEven(value);
    
            expect(expected).to.be.equal(actual);
        }); 
    });        
})