// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stopwords=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})})),t}var t=require("path").resolve,o=require("@stdlib/fs-read-json").sync,r=t("/home/runner/work/datasets-savoy-stopwords-it/datasets-savoy-stopwords-it/lib","..","data","words.json"),n={encoding:"utf8"};return module.exports=function(){var e=o(r,n);if(e instanceof Error)throw e;return e},e(Object.freeze({__proto__:null}))}));
//# sourceMappingURL=bundle.js.map
