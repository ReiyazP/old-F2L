module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // Change this to the path where your source files are located
        alias: {
          // Add aliases as needed
          components: './src/components',
          screens: './src/screens',
          utils: './src/utils',
          store: './src/store',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
