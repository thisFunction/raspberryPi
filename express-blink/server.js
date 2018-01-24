const express = require('express');
const app = express();

const Gpio = require('onoff').Gpio;
const led = new Gpio(13, 'out');

app.get('/on', (req, res) => {
	res.send('Hello LED');

	if (led.readSync() === 0) {
		led.writeSync(1);
	}
});

app.get('/off', (req, res) => {
	res.send('LED is now off');

	if (led.readSync() === 1) {
		led.writeSync(0);
	}
});

app.listen(3000, ()=> console.log('App listening on port 3000!'));

