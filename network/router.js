const express = require('express');
const message = require('../components/series/network');

const routes = function(server){
    server.use('/serie',message);
}
module.exports = routes;