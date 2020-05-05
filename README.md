**Install and create dist**

Run

`cp -n .env.dist .env`

Edit `.env`, after run install packages and build

`nvm use && npm install && npm run build`

Now dist created in folder `dist`

In development time you can use `npm run build::dev` or `build::dev::watch` for watch filesystem changes
