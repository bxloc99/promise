var fs = require('promise-fs');


// fs.readFile('./song1.txt', {encoding: 'utf8'}, function(err, song1){
// 	console.log(song1);
// });

// fs.readFile('./song2.txt', {encoding: 'utf8'}, function(err1, song2){
// 	console.log(song2);
// });

// fs.readFile('./song1.txt', {encoding: 'utf8'}).then(function(song1){
// 	console.log(song1)
// })

Promise.all([
	fs.readFile('./song1.txt', {encoding: 'utf8'}),
	fs.readFile('./song2.txt', {encoding: 'utf8'}),
	// fs.readFile('./song3.txt')
	]).then(function(values){
		console.log(values);
	}).catch(function(error){
		console.log(error);
	});