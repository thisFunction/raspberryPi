const Lcd = require('lcd');
const lcd = new Lcd({
	rs: 12,
	e: 21,
	data: [5, 6, 17, 18],
     	cols: 8,
	rows: 2
});

lcd.on('ready', function() {
	console.log('lcd ready')

	setInterval(function() {
		lcd.setCursor(0, 0);
 		lcd.print(new Date().toString().substring(16, 24));
	}, 1000);

	lcd.setCursor(0,1);
	lcd.print(`Hello world!`);
});

process.on('SIGINT', function() {
	lcd.clear();
	lcd.close();
	process.exit();
});
