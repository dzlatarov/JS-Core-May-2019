const lookupChar = require('./03.CharLookup');
const expect = require('chai').expect;

describe('lookupChar function tests', function () {
    describe('Incorrect', function () {
        it('Should return undefined if the first parameter is a number', function () {
            const first = 15;
            const second = 5;

            const actual = lookupChar(first, second);

            expect(undefined).to.be.equal(actual);
        });

        it('Should return undefined if the first parameter is an object', function () {
            const first = {name: 'Ivan', age: 15};
            const second = 10;

            const actual = lookupChar(first, second);

            expect(undefined).to.be.equal(actual);
        });

        it('Should return undefined if the first parameter is an array', function () {
            const first = [1, 2, 3, 4, 5];
            const second = 10;

            const actual = lookupChar(first, second);

            expect(undefined).to.be.equal(actual);
        });

        it('Should return undefined if the second parameter is a string', function () {
            const first = 'hello'
            const second = '15';

            const actual = lookupChar(first, second);

            expect(undefined).to.be.equal(actual);
        });

        it('Should return undefined if the second parameter is an object', function () {
            const first = 'hello';
            const second = {name: 'Ivan', age: 15};

            const actual = lookupChar(first, second);

            expect(undefined).to.be.equal(actual);
        });

        it('Should return undefined if the second parameter is an array', function () {
            const first = 'hello';
            const second = [1, 2, 3, 4, 5];

            const actual = lookupChar(first, second);

            expect(undefined).to.be.equal(actual);
        });

        it('should return the correct string if the second parameter is not integer', function () {
            expect(undefined).to.be.equal(lookupChar('text', 3.5));            
        });

        it('Should return incorrect index if the index is bigger than the string length', function () {
            const first = 'hello';
            const second = 6;

            const expected = 'Incorrect index';
            const actual = lookupChar(first, second);

            expect(expected).to.be.equal(actual);
        });

        it('Should return incorrect index if the index is equal to the string length', function () {
            const first = 'hello';
            const second = 5;

            const expected = 'Incorrect index';
            const actual = lookupChar(first, second);

            expect(expected).to.be.equal(actual);
        });

        it('Should return incorrect index if the index is less than a zero', function () {
            const first = 'hello';
            const second = -1;

            const expected = 'Incorrect index';
            const actual = lookupChar(first, second);

            expect(expected).to.be.equal(actual);
        });        
    });

    describe('Correct', function () {
        it('Should return the correct character at a given index', function () {
            const first = 'hello';
            const second = 2;

            const expected = 'l';
            const actual = lookupChar(first, second);

            expect(expected).to.be.equal(actual);
        });
    });
})