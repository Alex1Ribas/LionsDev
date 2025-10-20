const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const rotaMedicos = require('./medicos/routerMedicos');
const rotaPacientes = require('./pacientes/routerPacientes');
const rotaConsultas = require('./consultas/routerConsultas');
const rotaRelatorios = require('./relatorios/routerRelatorios');
const rotaBusca = require('./Busca/routerBusca')

app.use('/medicos', rotaMedicos);
app.use('/pacientes', rotaPacientes);
app.use('/consultas', rotaConsultas);
app.use('/relatorios', rotaRelatorios);
app.use('/busca', rotaBusca);

app.get('/', (req, res) => {
  res.send('API de Clínica Médica');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta:${port}`);
});
