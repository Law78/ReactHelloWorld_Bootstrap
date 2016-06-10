module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // In questo modo mi evito di specificare l'estensione nei require ;)
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      {
        loader:'babel-loader', // nome del loaders
        query: {
          presets: ['react', 'es2015'] // faccio il parse dei file con questi due presets
        },
        // con test indico cosa vado a prendere a cui faccio il parser
        // con il doppio // apro la regular expression, poi faccio l'escape del . con \. e metto l'estensione jsx ed infine $ per l'end del file
        // il punto interrogativo fa si che cerco sia i file js che jsx (rendono la x opzionale)
        test: /\.jsx?$/,
        // indico le cartelle da escludere, includo anche quella di bower che userò successivamente
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
