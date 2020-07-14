module.exports = function (api) {
    api.cache(true);

    const presets = [
        '@babel/react',
        '@babel/preset-flow'
    ];
    const plugins = [
        ["@babel/transform-runtime"]
    ]

    return {
        presets,
        plugins
    };
}

