var assert = require('assert');
var utils = require('../utils');

describe('Utils', function() {
    it('should return correct number of character types', function() {
        var a = "password";
        assert.equal(utils.getTypes(a), 1);
        var b = "password1";
        assert.equal(utils.getTypes(b), 2);
        var b = "goat m4n";
        assert.equal(utils.getTypes(b), 3);
        var c = "s0_0per 5nak3";
        assert.equal(utils.getTypes(c), 4);
    });
    it('should return expected values', function() {
        var a = "password1";
        assert.equal(utils.calculateScore(a), 4);
        var b = "goat m4n";
        assert.equal(utils.calculateScore(b), 15);
        var c = "s0_0per 5nak3";
        assert.equal(utils.calculateScore(c), 52);
        var d = "philosophie"; //it's a word! (line 89967)
        assert.equal(utils.calculateScore(d), 1);
    });
});
