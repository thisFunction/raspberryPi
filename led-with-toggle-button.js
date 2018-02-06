const Gpio = require('onoff').Gpio;
const LED = new Gpio(15, 'out');
const pushButton = new Gpio(14, 'in', 'both');

let LEDState = 0;
pushButton.watch(function (err, value) {
	if (err) {
		console.error('There was an error', err);
		return;
	}

	if (value === 0) {
		if (LEDState === 0) {
			LED.writeSync(1);
			LEDState = 1;
		} else {
			LED.writeSync(0);
			LEDState = 0;
		}
	}
});

function unexportOnClose() {
	LED.writeSync(0);
	LED.unexport();
	pushButton.unexport();
}

process.on('SIGINT', unexportOnClose);
