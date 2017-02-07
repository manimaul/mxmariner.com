####initial setup
```bash
sh init.sh
```

####gen css
```bash
sass style.scss ../site/gen/style.css
```

####debug build
```bash
PROD_ENV=0 node_modules/.bin/webpack
```

####release build
```bash
PROD_ENV=1 node_modules/.bin/webpack
```
