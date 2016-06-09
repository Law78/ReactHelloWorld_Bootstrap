// In questo modo accedo alle API di Express:
var express = require('express');

// Creo la mia App Express, ovvero ho una istanza di Express:
var app = express();

// Indichiamo la cartella che pubblichiamo. Con app.use aggiungo funzionalità alla mia App Express.
// con express.static indico una cartella, in questo caso public:
app.use(express.static('public'));

// Avvio il server:
app.listen(3000, function(){
  console.log('Express server is running on port 3000');
});
