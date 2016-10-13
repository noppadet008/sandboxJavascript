'use strict';

var axios = require('axios');

function ss(){
    var ins = axios.create({
        baseURL: 'https://www.google.com.sg'
    });

    ins.get('?gfe_rd=cr&ei=6D32V4SjOebLugShq4HoDw')
        .then(function (res) {
            let i = res.data;
            console.log(i);
            console.log('reach');
        });
}

ss();