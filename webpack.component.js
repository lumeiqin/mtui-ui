const path = require('path');
const {
    VueLoaderPlugin
} = require('vue-loader');
const glob = require("glob");
const list = {};

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/{index,item*}.js`);
    console.log("files", files.length)
    for (let file of files) {
        const compInfo = file.split(/[/.]/);
        const fileName = compInfo[compInfo.length - 2];
        const compDir = file.split(/[/.]/)[2];
        if (fileName === "index") {
            list[compDir] = `./${file}`;
        } else {
            list[fileName] = `./${file}`;
        }
    }
}

makeList('components/lib/', list)

module.exports = {
    mode: 'development',
    entry: list,
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mtui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]
        }]
    }
}
