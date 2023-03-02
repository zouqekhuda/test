module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null,
            },
        },
    },
    presets: ['module:metro-react-native-babel-preset'],
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ['./src/assets/fonts'], // stays the same
};