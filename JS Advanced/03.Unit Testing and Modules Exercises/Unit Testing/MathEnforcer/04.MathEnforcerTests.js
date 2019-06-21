const mathEnforcer = require('./04.MathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer function test', function () {
    describe('AddFive', function () {
        describe('Incorrect!', function () {
            it('Should return undefined when the input value is a string', function () {            
                const actual = mathEnforcer.addFive('5');
    
                expect(undefined).to.be.equal(actual);
            });
    
            it('Should return undefined when the input value is an object', function () {            
                const actual = mathEnforcer.addFive({});
    
                expect(undefined).to.be.equal(actual);
            });
    
            it('Should return undefined when the input value is an array', function () {            
                const actual = mathEnforcer.addFive([]);
    
                expect(undefined).to.be.equal(actual);
            });
        });
        
        describe('Correct!', function () {
            it('Should return the correct number plus 5', function () {                
                expect(10).to.be.equal(mathEnforcer.addFive(5));
                expect(-5).to.be.equal(mathEnforcer.addFive(-10));
                expect(10.14).to.be.closeTo((mathEnforcer.addFive(5.14)),0.01);
            });                        
        });
    });

    describe('SubtractTen', function () {
        describe('Incorrect!', function () {
            it('Should return undefined when the input value is a string', function () {
                const expected = undefined;
                const actual = mathEnforcer.subtractTen('hello');

                expect(expected).to.be.equal(actual);
            });

            it('Should return undefined when the input value is an object', function () {
                const expected = undefined;
                const actual = mathEnforcer.subtractTen({});

                expect(expected).to.be.equal(actual);
            });

            it('Should return undefined when the input value is an array', function () {
                const expected = undefined;
                const actual = mathEnforcer.subtractTen([]);

                expect(expected).to.be.equal(actual);
            });
        });

        describe('Correct!', function () {
            it('Should return the correct number minus 10', function () {               
                expect(0).to.be.equal(mathEnforcer.subtractTen(10));
                expect(-15).to.be.equal(mathEnforcer.subtractTen(-5));
                expect(20.15).to.be.closeTo((mathEnforcer.subtractTen(30.15)), 0.01);
            });          
        });
    });

    describe('Sum', function () {
        describe('Incorrect!', function () {
            it('Should return undefined if the first parameter is not a number', function () {
                const first = 'hello';
                const second = 10;

                const expected = undefined;
                const actual = mathEnforcer.sum(first, second);

                expect(expected).to.be.equal(actual);
            });

            it('Should return undefined if the second parameter is not a number', function () {
                const first = 10;
                const second = 'hello';

                const expected = undefined;
                const actual = mathEnforcer.sum(first, second);

                expect(expected).to.be.equal(actual);
            });            
        });

        describe('Correct!', function () {
            it('Should return the correct sum', function () {                
                expect(10).to.be.equal(mathEnforcer.sum(5,5));
                expect(2).to.be.equal(mathEnforcer.sum(-3,5));
                expect(6.1).to.be.equal(mathEnforcer.sum(2.7,3.4));
            });           
        });
    });
})