var hars = require('../helpers/hars');

exports.hars = {
    'parse and concat': function (test) {
        var har = hars(['test/data/har1.js', 'test/data/har2.js']);

        test.equal(har.log.entries.length, 6);
        test.equal(har.log.entries[2], 3);

        test.done();
    }
};
