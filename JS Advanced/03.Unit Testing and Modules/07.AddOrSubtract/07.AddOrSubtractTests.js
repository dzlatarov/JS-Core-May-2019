const createCalculator = require('./07.AddOrSubtract');
const expect = require('chai').expect;


describe('createCalculator tests', () => {
    describe('Correct', () => {
        it('should return the correct value after function add', () => {
            const calculator = createCalculator();
            calculator.add(5);
    
            const expected = 5;
            const actual = calculator.get(); 
    
            expect(expected).to.be.equal(actual);
        });
    
        it('should return the correct value after function subtract', () => {
            const calculator = createCalculator();
            calculator.add(5);
            calculator.subtract(2);
    
            const expected = 3;
            const actual = calculator.get(); 
    
            expect(expected).to.be.equal(actual);
        });
    
        it('should return the correct value after function get', () => {
            const calculator = createCalculator();
            calculator.add(15);
            calculator.subtract(15);
    
            const expected = 0;
            const actual = calculator.get(); 
    
            expect(expected).to.be.equal(actual);
        });
    
        it('should return the correct value if the input is string but it contains only digit', () => {
            const calculator = createCalculator();
            calculator.add('15');
            
    
            const expected = 15;
            const actual = calculator.get(); 
    
            expect(expected).to.be.equal(actual);
        });
    });
    
    describe('Not correct', () => {
        it('should return NaN when the input is string', () => {
            const calculator = createCalculator();
            calculator.add('abc');        
           
            const actual = calculator.get(); 
    
            expect(actual).to.be.NaN;
        });
    });    
})