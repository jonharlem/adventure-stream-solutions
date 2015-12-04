//MEET PIPE

// var fs = require('fs');
// var filename = process.argv[2]

// fs.createReadStream(filename).pipe(process.stdout);


// // INPUT OUTPUT
// process.stdin.pipe(process.stdout)

// // TRANSFORM
// var through = require('through2');
// var stream = through(write,end);

// function write (buffer, encoding, next) {
// 	this.push(buffer.toString().toUpperCase());
// 	next();
// }

// function end (done) {
// 	done();
// }

// process.stdin.pipe(stream).pipe(process.stdout);

// // LINES
// var split = require('split');
// var counter = 0;

// process.stdin
// 	.pipe(split())
// 	.pipe(through(function (line, encoding, next) {

// 		counter++;
// 		if (counter%2 === 0){
// 			this.push(line.toString().toUpperCase() + '\n');
// 		} else {
// 			this.push(line.toString().toLowerCase() + '\n');
// 		}
// 		next();
// 	})).pipe(process.stdout);

// // CONCAT
// var concat = require('concat-stream');

// process.stdin.pipe(concat(function(body){
// 	console.log(body.toString().split('').reverse().join(''))
// }));

// // HTTP SERVER
// var http = require('http');
// var through = require('through2');
// var stream = through(write, end);

// var server = http.createServer(function(req, res) {
// 	req.pipe(through(write, end)).pipe(res);
// });

// function write(buffer, encoding, next) {
// 	this.push(buffer.toString().toUpperCase());
// 	next();
// }

// function end(done) {
// 	done();
// }

// server.listen(process.argv[2])

// // HTTP CLIENT
// var request = require('request');

// var r = request.post('http://localhost:8099')

// process.stdin.pipe(r).pipe(process.stdout)

// //WEBSOCKETS
// var ws = require('websocket-stream');
// var stream = ws('ws://localhost:8099');

// stream.end("hello\n");

// HTML STREAM

// var trumpet = require('trumpet');
// var through = require('through');

// var tr = trumpet();
// var stream = tr.select('.loud').createStream();

// process.stdin.pipe(tr).pipe(process.stdout);
// stream
//   .pipe(through(function (buf) { this.queue(buf.toString().toUpperCase()); }))
//   .pipe(stream)


  var trumpet = require('trumpet');
  var through = require('through2');
  var tr = trumpet();

  var loud = tr.select('.loud').createStream();

  loud.pipe(through(function(buf, _, next) {
  	this.push(buf.toString().toUpperCase());
  	next();
  })).pipe(loud);

  process.stdin.pipe(tr).pipe(process.stdout);


