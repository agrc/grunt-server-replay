var fs = require('fs');

module.exports = function (files) {
    var entries = [];
    files.forEach(function (f) {
        var har = JSON.parse(fs.readFileSync(f));
        entries = entries.concat(har.log.entries);
    });

    return {
        log: {
            entries: entries
        }
    };
};
