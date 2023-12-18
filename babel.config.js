module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants/index',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@images': './src/assets/images',
          '@navigations': './src/navigations',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
