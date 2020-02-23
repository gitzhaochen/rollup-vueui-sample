const config = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          // edge: '17',
          // firefox: '60',
          chrome: "44"
        },
        useBuiltIns: "usage",
        corejs: 3,
        modules: false
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        helpers: true,
        corejs: 3,
        regenerator: false,
        useESModules: true
      }
    ]
  ]
};
module.exports = config;
