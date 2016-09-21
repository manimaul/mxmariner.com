```bash
cd src/main/js
npm init
```

#### Webpack
```bash
npm install webpack -g
npm install style-loader css-loader
```

#### RxJs
```bash
npm install --save rx-lite
```

#### React and React Router
```bash
npm install --save react react-dom react-router
npm install --save babel-loader babel-core babel-preset-es2015 babel-preset-react
```

####debug build
```bash
PROD_ENV=0 webpack
```

####release build
```bash
PROD_ENV=1 webpack
```
