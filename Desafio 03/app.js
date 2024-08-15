const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configura a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'db',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase'
});

// Conecta ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados.');
});

// Define a rota principal que realiza a consulta ao banco de dados
app.get('/', (req, res) => {
  connection.query('SELECT * FROM mydatabase.users', (err, results) => {
    if (err) {
      console.error('Erro ao realizar a consulta:', err.stack);
      res.status(500).send('Erro ao realizar a consulta:'+err.stack);
      return;
    }

    res.json(results); // Retorna os dados da tabela users como JSON
  });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
