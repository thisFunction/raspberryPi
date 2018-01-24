var Gpio = require('onoff').Gpio;
var led = new Gpio(13, 'out');
var blinkIntervals = setInterval(blinkLED, 250);

function blinkLED() {
        if (led.readSync() === 0) {
                led.writeSync(1)
        } else {
                led.writeSync(0);
        }
}

function endBlink() {
        clearInterval(blinkIntervals);
        led.writeSync(0);
        led.unexport();
}

setTimeout(endBlink, 5000);
