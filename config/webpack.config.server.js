const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const getClientEnvironment  = require('./env');

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0,-1);
const env = getClientEnvironment(publicUrl);

module.exports = {
    mode: 'server',
    entry: paths.ssrJs,
    target: 'node',                     // node 전용으로 번들링 한다는 것을 명시합니다.
    output:{
        path: paths.ssrBuild,
        filename: 'render.js',
        // Node.js에서 require로 불러올 수 있게 합니다.
        libraryTarget : 'commonjs2'
    },
    /*Loader를 사용하기 위한 부분*/
    module: {
        rules: [
            {   
                /*
                oneOf는 내부의 모든 로더를 시도해 보고, 해당하는 것이 없다면 맨 아래쪽의 file-loader를 실행시킵니다.
                */
                oneOf: [
                    {
                        test: /\.(js:jsx)$/,
                        include: path.appSrc,
                        loader: require.resolve('babel-loader'),
                        option: {
                            cacheDirectory: true
                        }
                    },
                    // css와 scss파일을 불러올 때는 
                    // css-loader/locals를 실행하는 것이 중요합니다.
                    // 파일을 따로 만들어내지 않기 때문입니다.
                    {
                        test: /\.css$/,
                        loader: require.resolve('css-loader/locals')
                    },

                    {
                        test: /\.scss$/,
                        use: [
                            {
                                loader: require.resolve('css-loader/locals'),
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    localIdentName: '[name]_ _[local]_ _[hash:base64:5]'
                                }
                            },
                            {
                                loader: require.resolve('sass-loader'),
                                options: {
                                    includePaths: [paths.globalStyles]
                                }
                            }
                        ]
                    },
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.js$/,/\.html$/,/\.json$/],
                        options:{
                            name: 'static/media/[name].[hash:8].[ext]',
                            emitFillle:false
                        }
                    }
                ]
            }
        ]
    },
    // NODE_PATH가 제대로 작동하도록 production에서 사용한 설정을 그대로 넣어줍니다.
    resolve: {   
        modules: ['node_modules', paths.appNodeModules].concat(
          process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        )
      },
    // 환경 변수 관련 플러그인만 적용해주면 됩니다.
    plugins: [
        new webpack.DefinePlugin(env.stringified)
    ]
}