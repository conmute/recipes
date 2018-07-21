# Steps to implement

These are all dependencies for all various analyzis utilities:

```bash
yarn add --dev \
     colony \
     dependency-cruiser \
     dependo \
     madge \
     serve \
     source-map-explorer \
     webpack-bundle-analyzer
```

* `colony`, `dependency-cruiser`, `dependo` and `madge` are runned from `./scripts`
* `webpack-bundle-analyzer` is runned from `package.json/scripts`
* `source-map-explorer` is not yet attached yet
* `serve` is for running given folder as a local server

Note for colony with react scripts, we need to do this command as well:

```bash
yarn add --dev babel-cli babel-preset-react babel-preset-env
```
