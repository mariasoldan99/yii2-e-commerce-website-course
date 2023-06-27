const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {merge} = require('webpack-merge');
const common = require('./webpack.config-common.js');
module.exports = merge(common, {
    mode: "production",
})