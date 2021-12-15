module.exports = function override(config, env) {
    if (!config.module.rules) {
        config.module.rules = [];
    }

    config.module.rules.push({
        test: /\.m?js/,
        resolve: {
            fullySpecified: false,
        },
    });

    return config;
};
