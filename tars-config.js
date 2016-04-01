module.exports = {
    "autoprefixerConfig": [
        "> 0.1%",
        "last 8 versions",
        "Firefox ESR",
        "android 4",
        "Firefox < 20"
    ],
    "postcss": [],
    "svg": {
        "active": false,
        "workflow": "sprite",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "useJsLintAndHint": true,
    "jsPathsToConcatBeforeModulesJs": [],
    "lintJsCodeBeforeModules": false,
    "jsPathsToConcatAfterModulesJs": [],
    "lintJsCodeAfterModules": false,
    "useBabel": false,
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": true,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "browserSyncConfig": {
        "baseDir": "./dev",
        "port": 3004,
        "open": true,
        "browser": "default",
        "startUrl": "/index.html",
        "useNotifyInBrowser": true,
        "injectChanges": false
    },
    "removeConsoleLog": true,
    "minifyHtml": false,
    "staticPrefix": "assets/",
    "buildPath": "./builds/",
    "useBuildVersioning": true,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "jade",
    "cssPreprocessor": "stylus",
    "useImagesForDisplayWithDpi": [
        96,
        192
    ],
    "fs": {
        "staticFolderName": "assets",
        "imagesFolderName": "images"
    }
};
