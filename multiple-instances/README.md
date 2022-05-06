TLDR: you can also use [node-load-balancers](https://github.com/paulborza/node-load-balancers) but the repository has no updates since 4 years ago, so I don't recommend using it directly (without forking and solving the vulnerabilities from there), there's might have some vulnerabilities you don't want to have.

## Pre-requisites

```sh
yarn global add pm2
```

## Usage

Run the multiple application servers

```sh
pm2 start app.js -- 3000
pm2 start app.js -- 3001
pm2 start app.js -- 3002
pm2 start app.js -- 3003
```

Update the nginx configuration changes 

```sh
sudo service nginx restart # or
sudo systemctl nginx restart
```

NGINX using Robin-round manner under the hood.