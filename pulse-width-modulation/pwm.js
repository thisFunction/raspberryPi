
const raspi = require('raspi');
const pwm = require('raspi-pwm');

raspi.init(() => {
	const led = new pwm.PWM('P1-12');
	let ledStrength = 0;
		led.write(0.1);
	while( ledStrength < 1 ) {
		setInterval(()=>{
			ledStrength+=0.1
			led.write(ledStrength);
		}, 1000);
	};
	led.write(0);
});
