'use strict';

var axios = require('axios');

function ss(){
    var ins = axios.create({
        baseURL: 'http://capman.alpha.compass.int.thomsonreuters.com:8092/api/v1/'
    });

    ins.get('/norms?sort_by=name.raw:asc')
        .then(function (res) {
            let i = res.data;
            console.log(i[0]);
            console.log('reach');
        });
}

ss();