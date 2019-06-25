const StringBuilder = require('./07.StringBuilder');
const assert = require('chai').assert

describe('stringBuilder tests', function () {
    let stringBuilder;

    beforeEach( function () {
        stringBuilder = new StringBuilder();
    });

    it('It should have the correct properties', function () {
        assert.isFunction(StringBuilder.prototype.append);        
        assert.isFunction(StringBuilder.prototype.prepend);       
        assert.isFunction(StringBuilder.prototype.insertAt);       
        assert.isFunction(StringBuilder.prototype.remove);        
        assert.isFunction(StringBuilder.prototype.toString);        
    });

    describe('constructor', function () {
        it('Should work correctly without passed parameter', function () {            
            const expected = '';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });

        it('Should work correctly with undefined parameter', function () {
            stringBuilder = new StringBuilder(undefined);
            const expected = 0;
            const actual = stringBuilder._stringArray.length;

            assert.equal(actual, expected);
        });

        it('Should work correctly with passed string parameter', function () {
            stringBuilder = new StringBuilder('hello');
            const expected = 'hello';
            const actual = stringBuilder._stringArray.join('');

            assert.equal(actual, expected);
        });

        it('Should throw type error if parameter is not a string', function () {                        
            assert.throw(() => {
                stringBuilder = new StringBuilder(43)
            }, 'Argument must be string');
        });
    }); 
    
    describe('append', function () {
        it('Should work correctly with passed string parameter', function () {    
            stringBuilder.append('hello');        
            const expected = 'hello';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });

        it('Should throw typeError if the parameter is not a string', function () {               
            assert.throw(() => {
                stringBuilder.append([]);
            },'Argument must be string');
        });

        it('Should work correctly if its called several times', function () {    
            stringBuilder.append('hello'); 
            stringBuilder.append('world');       
            stringBuilder.append('heyy');       
            const expected = 'helloworldheyy';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });
    });

    describe('prepend', function () {
        it('Should work correctly with passed string parameter', function () {
            stringBuilder.prepend('hello');        
            const expected = 'hello';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });

        it('Should throw typeError if the parameter is not a string', function () {               
            assert.throw(() => {
                stringBuilder.prepend(5);
            },'Argument must be string');
        });

        it('Should work correctly if its called several times', function () {    
            stringBuilder.prepend('hello'); 
            stringBuilder.prepend('world');       
            stringBuilder.prepend('heyy');       
            const expected = 'heyyworldhello';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });
    });

    describe('insertAt', function () {
        it('Should throw typeError if the parameter is not a string', function () {
            assert.throw(() => {
                stringBuilder.insertAt([], 1);
            }, 'Argument must be string');
        });

        it('Should insert correctly when the passed parameter is string', function () {
            stringBuilder.insertAt('hello',0);
            stringBuilder.insertAt(' world',5);
            stringBuilder.append('heyy');

            const expected = 'hello worldheyy';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });

        it('Should work correctly if its called several times', function () {    
            stringBuilder.append('hello'); 
            stringBuilder.insertAt(' lol ', 1);       
            stringBuilder.insertAt(' lol ', 1);   
            stringBuilder.insertAt(' lol ', 1);   

            const expected = 'h lol  lol  lol ello';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });
    });

    describe('remove', function () {
        it('Should work correctly with valid index', function () {
            stringBuilder.append('hello');
            stringBuilder.remove(2,3);

            const expected = 'he';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });

        it('Should work correctly when its called several times', function () {
            stringBuilder.append('helloWorld');
            stringBuilder.remove(1,1);
            stringBuilder.remove(4,3);
            stringBuilder.remove(1,2);

            const expected = 'hold';
            const actual = stringBuilder.toString();

            assert.equal(actual, expected);
        });
    });

    it('Should work correctly with multiple functions called', function () {
        stringBuilder.append('there');
        stringBuilder.prepend('Hello');
        stringBuilder.insertAt(' people', 10);
        stringBuilder.remove(15, 2);

        const expected = 'Hellothere peop';
        const actual = stringBuilder.toString();

        assert.equal(actual, expected);
    });
})