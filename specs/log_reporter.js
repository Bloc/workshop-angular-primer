var util = require('util'),
    Base = require('mocha/lib/reporters/base');

module.exports = Reporter;

function Reporter(runner) {
    Base.call(this, runner);

    runner.on('suite', function(suite) {
        if (suite.title) {
            console.log("<DESCRIBE::>" + format(suite.title));
        }
    });

    runner.on('suite end', function(suite) {
        if (suite.title) {
            console.log("<COMPLETEDIN::>");
        }
    });

    runner.on('test', function(test) {
        console.log('<IT::>' + format(test.title));
    });

    runner.on('test end', function(test) {
        console.log("<COMPLETEDIN::>");
    });

    runner.on('pass', function(test){
        console.log('<PASSED::>Passed');
    });

    runner.on('fail', function(test, err){
        if (err instanceof Error && test.err.name != 'AssertionError') {
            console.log('<ERROR::>' + format(err.stack || err.toString()));
        }
        else if (test.timedOut) {
            console.log('<FAILED::>' + 'Timed out');
        }
        else {
            console.log('<FAILED::>' + format(err.message));
        }

    });

    runner.on('end', function(){
        process.exit(0);
    });

    function format(text) {
        return text.replace(/\n/g, '<:LF:>');
    }
}
