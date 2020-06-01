// 1. Imortar os módulos
var express = require("express");
var http = require("http");
// 2. Instância a aplicação express
var app = express();
// 3. Configura a porta que a aplicação irá ouvir
app.listen(8080);

app.get("/user", function (request, require) {
  var options = {
    method: "GET",
    hostname: "api.myjson.com",
    path: "/bins/1ez5xx",
  };

  // 1. Criar o objeto que representa uma requisição HTTP
  var getUser = http.request(options, function (res) {});
  // 2. Finaliza a requisição
  getUser.end();
});

app.get("/user", function (request, response) {
  var options = {
    method: "GET",
    hostname: "api.myjson.com",
    path: "/bins/1ez5xx",
  };

  var getUser = http.request(options, function (res) {
    // 1. Criamos uma variável para armazenar a informação proveniente da resposta
    var body = "";
    // 2. Definimos que a resposta será lida como utf-8, o que faz com que ela seja interpretada como String
    response.setDefaultEncoding("utf8");
    // 3. Toda vez que um pedaço da informação for transferida, vamos concatená-la na variável 'body'
    res.on("data", function (chunk) {
      body += chunk;
    });
  });

  getUser.end();
});

app.get("/user", function (request, response) {
  var options = {
    method: "GET",
    hostname: "api.myjson.com",
    path: "/bins/1ez5xx",
  };

  var getUser = http.request(options, function (res) {
    // 1. Criamos uma variável para armazenar a informação proveniente da resposta
    var body = "";
    // 2. Definimos que a resposta será lida como utf-8, o que faz com que ela seja interpretada como String
    response.setDefaultEncoding("utf8");
    // 3. Toda vez que um pedaço da informação for transferida, vamos concatená-la na variável 'body'
    res.on("data", function (chunk) {
      body += chunk;
    });

    // 1. Quando a informação terminar de ser transferida
    res.on("end", function () {
      // 2. Enviamos a informação no formato JSON
      response.json(JSON.parse(body));
      // 3. Finalizamos a requisição
      response.status(200).end();
    });
  });

  getUser.end();
});

app.get("/user", function (request, require) {
  var options = {
    method: "GET",
    hostname: "api.myjson.com",
    path: "/bins/1ez5xx",
  };

  // 1. Criar o objeto que representa uma requisição HTTP
  var getUser = http.request(options, function (res) {});

  getUser.on("error", function (error) {
    // 1. Enviamos a mensagem de erro como respsota.
    response.write(error.message);
    response.status(404).end();
  });

  getUser.end();
});
