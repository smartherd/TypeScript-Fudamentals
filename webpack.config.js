const path = require('path');

module.exports = {
    entry: './app/main.ts', // point to start building bundle
    devtool: 'inline-source-map', // create source map inline with final bundle
    mode: 'development', // how to use its built-in optimizations (development/production/none)
    module: { // configure ts‑loader to run TypeScript compiler
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: { // files to use for module resolution
      extensions: [ '.tsx', '.ts', '.js' ]
    }, 
    output: { // final compiled output file
        filename: 'bundle.js'
    },
    devServer: { // development server that provides live reloading
        static: {
            directory: path.resolve( __dirname, '' )
        }
    }
  };
  