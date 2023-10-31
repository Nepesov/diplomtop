const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser'); // Добавим парсер для JSON

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Используем парсер JSON

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '123456789',
  database: 'reactrocketsproject',
});

app.post('/reactrocketsproject', (req, res) => {
  const userData = {
    name: req.body.name,
    secondname: req.body.secondname,
    email: req.body.email,
    password: req.body.password,
  };

  const sql = "INSERT INTO users SET ?";
  db.query(sql, userData, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Ошибка при добавлении данных в базу" });
    }
    return res.status(200).json({ message: "Данные успешно добавлены" });
  });
});

app.listen(8082, () => {
  console.log('Сервер запущен на порту 8081');
});