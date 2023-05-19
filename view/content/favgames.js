const header = require('../parts/header');
const footer = require('../parts/footer');
const head = require('../parts/head')

const games = `
${head('Игры')}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Preferred games</title>
</head>
<body>
    ${header}
    <h1>Мои любимые игры</h1>
    <ul>
        <li>Counter-strike Global Offensive</li>
        <li>Dishonored</li>
        <li>Outlast</li>
        <li>Half-life 2</li>
        <li>Серия игр Portal</li>
        <li></li>
        <li>Phasmophobia</li>
        <li>Sea of Thieves</li>
    </ul>
    ${footer}
</body>
</html>
`

module.exports = games;