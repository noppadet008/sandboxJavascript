var ping = require('ping');


var cfg = {
    timeout: 10,
    // WARNING: -i 2 may not work in other platform like window 
    extra: ["-a"],
};

var hosts = ['worapoj-ingestion-02.amers2.cis.trcloud', 'www.google.com', 'www.yahoo.com',''];
hosts.forEach(function (host) {
    ping.promise.probe(host,cfg)
        .then(function (res) {
            console.log(res);
        });
});