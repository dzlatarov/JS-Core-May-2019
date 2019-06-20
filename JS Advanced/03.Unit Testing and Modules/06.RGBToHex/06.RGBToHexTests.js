const rgbToHexColor = require('./06.RGBToHex');
const expect = require('chai').expect;

describe('rgbToHex test', () => {
    it('should return undefined with invalid red', function () {       
        const expected = undefined;
        let actual = rgbToHexColor('100', 0, 0);

        expect(expected).to.be.equal(actual);

        actual = rgbToHexColor(-1, 0, 0);
        expect(expected).to.be.equal(actual);

        actual = rgbToHexColor(256, 0, 0);
        expect(expected).to.be.equal(actual);
    });

    it('should return undefined with invalid green', function () {       
        const expected = undefined;
        let actual = rgbToHexColor(0, '25', 0);

        expect(expected).to.be.equal(actual);

        actual = rgbToHexColor(0, -25, 0);
        expect(expected).to.be.equal(actual);

        actual = rgbToHexColor(0, 256, 0);
        expect(expected).to.be.equal(actual);
    });

    it('should return undefined with invalid green', function () {       
        const expected = undefined;
        let actual = rgbToHexColor(0, 0, '150');

        expect(expected).to.be.equal(actual);

        actual = rgbToHexColor(0, 0, -1);
        expect(expected).to.be.equal(actual);

        actual = rgbToHexColor(0, 0, 256);
        expect(expected).to.be.equal(actual);
    });       

    it('should return correct hexColor', function () {
        
        let expected = '#C44B31';
        let actual = rgbToHexColor(196, 75, 49);        

        expect(expected).to.be.equal(actual);
        
        expected = '#FFFF00';
        actual = rgbToHexColor(255,255,0);

        expect(expected).to.be.equal(actual);

        expected = '#97971E';
        actual = rgbToHexColor(151,151,30);

        expect(expected).to.be.equal(actual);
    });
})