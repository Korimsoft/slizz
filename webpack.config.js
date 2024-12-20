const path = require("node:path");

module.exports = {
    mode: "production",
    target: 'web',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'index.js',
        library: {
            name: 'slizz-[version]',
            type: 'umd',
        },
        clean: true,
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    plugins: [

    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname + '/tsconfig.json'),

                    }
                }
            },
        ]
    }
}