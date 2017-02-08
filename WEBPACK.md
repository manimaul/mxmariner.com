####initial setup
```bash
sh init.sh
```

####gen css
```bash
sass style.scss ../site/style.css
```

####run dev server
```bash
node_modules/.bin/webpack-dev-server --open
```

####debug build
```bash
PROD_ENV=0 node_modules/.bin/webpack
```

####release build
```bash
PROD_ENV=1 node_modules/.bin/webpack
```
