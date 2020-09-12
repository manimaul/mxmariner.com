# [MXMariner.com](https://mxmariner.com/)

Source for https://mxmariner.com/ Static (SPA) Single Page Web App

#### Stack

* GUI [ReactJs](https://facebook.github.io/react/)
* Events [RXJs](http://reactivex.io/rxjs/)
* GUI [Bootstrap](http://getbootstrap.com/) 

#### [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable) (Debian Linux)
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn

export PATH="$PATH:`yarn global bin`" 
```

#### Setup Steps
```bash
yarn global add create-react-app
yarn global add react-scripts
create-react-app mxmariner.com
cd mxmariner.com
yarn add rx-lite 
yarn add react-router
yarn add react-router-dom
```

#### Local Dev
```bash
yarn start 
```

### Build Release

```bash
yarn build 
```

### Build Docker Image

```bash
yarn global add create-react-app
yarn global add react-scripts
yarn add rx-lite
yarn add react-router
yarn add react-router-dom
yarn build
tag_postfix="$(date +"%m-%d-%y")_r0"
docker build -t "manimaul/mxmariner.com:${tag_postfix}" .
docker tag "manimaul/mxmariner.com:${tag_postfix}" "manimaul/mxmariner.com:latest"
docker push "manimaul/mxmariner.com:latest"
docker push "manimaul/mxmariner.com:${tag_postfix}" 
```

### Deploy to Kubernetes
```bash
cat k8s.yml | linkerd inject - | kubectl apply -f -
```