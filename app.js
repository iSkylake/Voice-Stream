var express = require('express'),
	app = express();


var record = require('node-record-lpcm16');
var fs = require('fs');
var player = require('play-sound')(opts={});

//Record audio

	// console.log('Record start')
	// var file = fs.createWriteStream('test.wav', { encoding: 'binary' })

	// record.start().pipe(file)

	// setTimeout(function () {
	//   record.stop()
	//   console.log('Record stop')
	// }, 10000)

	app.use(express.static('public'));

	app.get('/', function(){
		res.render('index.html');
	});

	app.post('/start', function(req, res){
		console.log('START');
		var file = fs.createWriteStream('test.wav', { encoding: 'binary' });
		record.start().pipe(file);
	});

	app.post('/stop', function(req, res){
		console.log('STOP');
		record.stop();
	});

	app.post('/play', function(){
		player.play('test.wav', function(err){
			if(err) throw err
		});
	});

app.listen(3000, function(){
});