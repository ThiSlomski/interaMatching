const express = require("express");

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {

    response = {
        message: "Aqui faremos a lógica do match"
    };

    res.status("200").json(response);

});

module.exports= {
    routes,
};