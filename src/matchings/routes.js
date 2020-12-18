const express = require("express");

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {

    data = [
        {
            matchId: 1,
            match: {
                empresa: "Intera",
                cargo: "Backend Developer",
                remuneracao: 123,
                nome: "Luana Aparecida",
                idade: 28,
                cidade: "Ibiúna"
            },
            status: "aguardando bate papo"
        },
        {
            matchId: 2,
            match: {
                empresa:"99Leads",
                cargo: "Backend Developer",
                remuneracao: 123,
                nome: "Anna Julia",
                idade: 18,
                cidade: "Ibiúna"
            },
            status: "aguardando bate papo"
        }
    ]

    // Chama todos os matchs, sem "atuação" da nossa equipe.

    response = {
        message: "Consulta realizada com sucesso",
        data
    };

    res.status("200").json(response);

});

routes.post('/', (req, res) => {

    response = {
        message: "Aqui faremos a lógica do match"
    };

    // Chama vagas em aberto

    // Chama talentos

    // Determina match

    // Salva no Banco o match para posterior exibição - status: "aguardando bate papo"

    res.status("200").json(response); // O certo seria um return simples, ou até mesmo um log, mas pra nossa brincadeira tá bom assim... rs

});

module.exports = {
    routes,
};