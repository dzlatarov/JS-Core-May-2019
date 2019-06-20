const isSymmetric = require('./05.CheckForSymmetry');
const expect = require('chai').expect;

describe('check for symmetry tests', function () {
    it('should return false when input array is null', function () {
        const input = null;
        
        const actual = isSymmetric(input);

        expect(actual).is.false;
    });

    it('should return false for an array of the same type that is not symmetric', function () {
        const array = [1, 2, 3, 4, 5];
        
        const actual = isSymmetric(array);

        expect(actual).to.be.false;
    });

    it('should return false for an array with different data types that is not symmetric', function () {
        const array = [1, {}, [], 'hello'];
        
        const actual = isSymmetric(array);

        expect(actual).to.be.false;
    });

    it('should return true for an array of the same types that that is symmetric', function () {
        const array = [1, 2, 3, 2, 1];
        
        const actual = isSymmetric(array);

        expect(actual).to.be.true;
    });

    it('should return true for an array with different data types that is symmetric', function () {
        const array = [[], 5, 'str', {}, true, {}, 'str', 5, []];
        
        const actual = isSymmetric(array);

        expect(actual).to.be.true;
    });

    it('should return true if an empty array is given', function () {
        const array = [];
        
        const actual = isSymmetric(array);

        expect(actual).to.be.true;
    });

    it('should return false if input is number', function () {
        const input = 1;
       
        const actual = isSymmetric(input);

        expect(actual).to.be.false;
    });

    it('should return false if input is object', function () {
        const input = {};
        
        const actual = isSymmetric(input);

        expect(actual).to.be.false;
    });

    it('should return false if input is string', function () {
        const input = 'hello';
        
        const actual = isSymmetric(input);

        expect(actual).to.be.false;
    });
})