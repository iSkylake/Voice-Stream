var express = require('express'),
	app = express();

var record = require('node-record-lpcm16')
var fs = require('fs')

//Record audio

	console.log('Record start')
	var file = fs.createWriteStream('test.wav', { encoding: 'binary' })

	record.start().pipe(file)

	// Stop recording after three seconds
	setTimeout(function () {
	  record.stop()
	  console.log('Record stop')
	}, 10000)

app.listen(3000, function(){
});