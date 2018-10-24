const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('hello world')
})

app.get('/get-something', (req, res) => {
	res.send({
		hello: 'world',
	})
})

app.get('/html', (req, res) => {
	res.send(`
		<html>
		<head>
			<title>Hello</title>
		</head>
		<body>
			<p>Hello world</p>
			<img src="/image.png" />
		</body>
		</html>
   `)
})

app.use(express.static('public'))

app.listen(3000, () => {
	console.log('hello')
})