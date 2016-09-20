var _ = require('lodash');
function createMetricList(n) {
    return {
        sensu: _.map(_.range(1, n + 1), function (i) { return "smoketest.sensu.sample" + i; }) ,
        direct: _.map(_.range(1, n + 1), function (i) { return "smoketest.direct.sample" + i; })
    };
}


console.log(createMetricList(5));