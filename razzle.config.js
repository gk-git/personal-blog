'use strict';
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = {
    modify: (config, { target, dev }, webpack) => {
        // do something to config
        const markdownLoader = {
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                }
            ]
        };
        config.module.rules.push(markdownLoader);

        // insert modernizr
        var modernizr_config = dev ? {} : {
            minify: {
                output: {
                    comments: true,
                    beautify: true
                }
            }
        }

        config.plugins.push(new ModernizrWebpackPlugin(modernizr_config))

        return config;
    },
};
