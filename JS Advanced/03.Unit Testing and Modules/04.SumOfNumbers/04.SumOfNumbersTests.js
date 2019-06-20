const sum = require('./04.SumOfNumbers');
const expect = require('chai').expect;

describe('sum tests', function () {
    it(`should return the correct sum`, function () {
        const array = [1, 2, 3,];

        const expected = 6;
        const actual = sum(array);

        expect(expected).to.be.equal(actual);
    });

    it('should return 0 if the array.length is zero', function () {
        const array = [];

        const expected = 0;
        const actual = sum(array);

        expect(expected).to.be.equal(actual);
    });

    it('should return NaN if some of the elements are not numbers', function () {
        const array = ['a',2, 3];

        const expected = NaN;
        const actual = sum(array);

        expect(actual).to.be.NaN;
    });
})