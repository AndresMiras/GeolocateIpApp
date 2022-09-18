const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** 
    Tener en cuenta que estamos borrando el contenido del build cada vez que ejecutamos para desarrollo 
    Siempre podemos cambiar la opción indicando otra carpeta para los elementos estáticos. 

    Ahora mismo conservamos los estados gracias a ReactRefreshWebpackPlugin, que conserva los estados de los functional components tras actualizaciones del código.

    Para debugear como developers tenemos el modo
    devtool: "eval-source-map",
*/

const devConfig = {
    mode: "development",
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        hot: true,
    },
    target: "web",
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);