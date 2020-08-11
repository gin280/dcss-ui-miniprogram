# dcss-ui-miniprogram

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

```
.
├── LICENSE
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public                         //public文件夹下的资源不经过webpack处理
│   ├── index.html
│   └── robots.txt
└── src
    ├── App.vue
    ├── api                         
    │   ├── index.js
    │   └── request.js
    ├── assets
    │   └── logo.png
    ├── components                 
    │   └── HelloWorld.vue
    ├── main.js
    ├── registerServiceWorker.js    
    ├── router
    │   └── index.js
    ├── store                      
    │   └── index.js
    ├── utils
    └── views                      
        ├── About.vue
        └── Home.vue
```