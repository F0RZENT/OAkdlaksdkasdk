const header = require('../parts/header');
const footer = require('../parts/footer');
const head = require('../parts/head')

const pcspec = `
${head('Комплектующие')}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>filmsfav</title>
</head>
<body>
    ${header}
    <h1>Базавые фильмы:</h1>
    <ul>
        <li>Драйв</li>
        <li>Таксист</li>
        <li>Нечто</li>
        <li>Бойцовский клуб</li>
        <li>Американский психопат</li>
        <li>Стрингер</li>
    </ul>
    ${footer}
</body>
</html>
`

module.exports = pcspec;