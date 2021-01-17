MyEdMaster-frontend

##### Access to server

```bash
ssh -i ~/yihao.pem root@47.252.83.229
```

##### Deploy react project (frontend)

Method1:

Local build and server deploy

```bash
yarn build
sudo tar -cvf build.tar build
scp -i ~/yihao.pem build.tar root@47.252.83.229:/root
```

Method2:

server build and server deploy

```bash
ssh -i ~/yihao.pem root@47.252.83.229
git pull # pull the updated code
yarn build
```

Server

```bash
ssh -i ~/yihao.pem root@47.252.83.229
./frontend/deploy.sh # many deploy files, please figure out the one required
```

Nginx conf

```bash
vim /etc/nginx/nginx.conf # default
cd /etc/nginx/conf.d/ # customizing config
nginx -s reload
```

##### Deploy nodejs (express) project

Server

```bash
git pull
forever start -l forever.log -a /{your file path}/bin/www
#Then config the nginx proxy config: transfer the domain to the port
```

##### 

