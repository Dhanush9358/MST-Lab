const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
	                 .update('cse-c')
	                 .digest('hex');
console.log(hash);

/*
Hash Algorithms - At least 2
Encruption/Decryption Algorithms - At least 2
Install Express.js
Run simple application using Express.js
*/