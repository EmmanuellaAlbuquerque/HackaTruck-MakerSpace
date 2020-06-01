// 1. Importar módulos
var express = require("express");
var bodyParser = require("body-parser");

// 2. Importar o módulo da nossa aplicação
var LisdaDAO = require("./ListaDAO");

// 3. Iniciar aplicação Express
var app = express();

// 4. Configurar método para ler a propriedade 'body' das requisições
app.use(bodyParser.json());

// ROTAS

// { CRIA NOVA LISTA }
app.post("/lista", function (request, response) {
  // Pega nome da propriedade body do request
  var nome = request.body.nome;
  // Cria a nova lista
  var result = LisdaDAO.criarLista(nome);

  response.status(200);
  response.json(result);
  response.end();
});

// { RENOMEIA LISTA }
app.put("/lista/:id_lista", function (request, response) {
  // Pega o novo nome da propriedade body do request
  var novoNome = request.body.nome;
  // Pega o id da lista dos parâmetros da rota
  var idDaLista = request.params.id_lista;
  // Renomeia a lista
  var result = LisdaDAO.renomearLista(idDaLista, novoNome);
  response.status(200);
  response.json(result);
  response.end();
});

// { APAGA LISTA }
app.delete("/lista/:id_lista", function (request, response) {
  //Pega o ID da lista a ser apagada
  var idDaLista = request.params.id_lista;
  // Apaga a lista com identificador correspondente
  var result = LisdaDAO.apagarLista(idDaLista);
  response.status(200);
  response.json(result);
  response.end();
});

// { LISTA TODAS AS LISTAS }
app.get("/lista", function (request, response) {
  response.status(200);
  response.json(LisdaDAO.getListas());
  response.end();
});

// { CRIA NOVA TAREFA EM UMA LISTA }
app.post("/lista/:id_lista", function (request, response) {
  // Pegar as informações provenientes da requisição
  var idDaLista = request.params.id_lista;
  var descricaoDaTarefa = request.body.descricao;
  // Adiciona a nova tarefa na lista de tarefas
  var result = LisdaDAO.novaTarefa(descricaoDaTarefa, idDaLista);
  response.status(200);
  response.json(result);
  response.end();
});

// { ALTERA TAREFA PARA COMPLETA OU NÃO COMPLETA }
app.put("/lista/:id_lista/tarefa/:id_tarefa", function (request, response) {
  // Pega as informações provenientes da requisição
  var idDaLista = request.params.id_lista;
  var idDaTarefa = request.params.id_tarefa;
  // Alterna o estado da tarefa
  var result = LisdaDAO.toggleTarefa(idDaLista, idDaTarefa);
  response.status(200);
  response.json(result);
  response.end();
});

// { APAGA TAREFA DE UMA LISTA }
app.delete("/lista/:id_lista/tarefa/:id_tarefa", function (request, response) {
  // Pega as informações provenientes da requisição
  var idDaLista = request.params.id_lista;
  var idDaTarefa = request.params.id_tarefa;
  // Apaga a tarefa da lista de tarefas
  var result = LisdaDAO.apagarTarefa(idDaLista, idDaTarefa);
  response.status(200);
  response.json(result);
  response.end();
});

// { LISTA TAREFAS DE UMA LISTA }
app.get("/lista/:id_lista/tarefa", function (request, response) {
  // Pega o identificador da lista na rota
  var idDaLista = request.params.id_lista;
  response.status(200);
  response.json(LisdaDAO.getTarefas(idDaLista));
  response.end();
});

// 5. Associar nossa API com a porta 8080
app.listen(8080);

// CONSUMINDO RESTFUL APIs com node red

// Fluxo criado no node red
// nós de entrada - input
// nós de saída - output
