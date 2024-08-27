// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"a1dc5":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d5ea0bb3788a9e14";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
// Import the library
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _arabicReshaper = require("arabic-reshaper");
var _arabicReshaperDefault = parcelHelpers.interopDefault(_arabicReshaper);
let element = document.getElementById("effect");
let unicodeVal = document.getElementById("unicode-value");
let originalString = element.innerText;
console.log(originalString);
// This can be a plain string. I just want to make sure I am feeding
// it the "plain" letter, not the initial/middle/end forms
// const originalString = String.fromCharCode(0x0636, 0x0636); // ضض
// This will convert it to the 'shaped' letters. That means the letters
// will be transformed into the 'initial/middle/end' forms in the string
// (not just when it draws to the screen).
const arabicString = (0, _arabicReshaperDefault.default).convertArabic(originalString);
// And get the values. These will be the specific initial/middle/end values, not the generic ones
console.log(arabicString.codePointAt(0).toString(16), arabicString.codePointAt(1).toString(16) // outputs fedf
);
// Wrap each Arabic character in a span
let spanWrapper = "";
// Loop through each character and wrap it in a span
for(let i = 0; i < arabicString.length; i++){
    if (arabicString[i] !== " ") spanWrapper += `<span class="effect--span">${arabicString.charAt(i)}</span>`;
    else // If it's a space, then don't wrap it in a span and add a space as-is
    spanWrapper += " ";
    // Replace the text container with the new HTML structure
    element.innerHTML = spanWrapper;
}
let spanEffect = document.querySelectorAll(".effect--span");
const isolatedUnicodes = [
    "fe8d",
    "fe95",
    "fe99",
    "fe9d",
    "fea1",
    "fea5",
    "fea9",
    "feab",
    "fead",
    "feaf",
    "feb1",
    "feb5",
    "feb9",
    "febd",
    "fec1",
    "fec5",
    "fec9",
    "fecd",
    "fed1",
    "fed5",
    "fed9",
    "fedb",
    "fee1",
    "fee5",
    "fee9",
    "feed",
    "fef1",
    "fe81",
    "fe93",
    "feef"
];
spanEffect.forEach((span)=>{
    let character = span.innerText;
    let unicode = character.codePointAt(0).toString(16);
    if (isolatedUnicodes.includes(unicode)) span.style.color = "red";
    span.onmousemove = function() {
        if (isolatedUnicodes.includes(unicode)) span.innerHTML += "";
        else span.innerHTML += "\u0640";
        unicodeVal.innerHTML = unicode;
    };
});

},{"arabic-reshaper":"hLRUN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hLRUN":[function(require,module,exports) {
/**
 * Javascript Arabic Reshaper by Louy Alakkad
 * https://github.com/louy/Javascript-Arabic-Reshaper
 * Based on (http://git.io/vsnAd)
 */ (function(root, factory) {
    var name = "ArabicReshaper";
    /* global define, module */ /* istanbul ignore next */ if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define(factory);
    else if (0, module.exports) module.exports = factory();
    else // Browser globals
    root[name] = factory();
})(this, function() {
    var charsMap = [
        /* code,isolated,initial, medial, final */ [
            0x0621,
            0xFE80,
            null,
            null,
            null
        ],
        /* HAMZA */ [
            0x0622,
            0xFE81,
            null,
            null,
            0xFE82
        ],
        /* ALEF_MADDA */ [
            0x0623,
            0xFE83,
            null,
            null,
            0xFE84
        ],
        /* ALEF_HAMZA_ABOVE */ [
            0x0624,
            0xFE85,
            null,
            null,
            0xFE86
        ],
        /* WAW_HAMZA */ [
            0x0625,
            0xFE87,
            null,
            null,
            0xFE88
        ],
        /* ALEF_HAMZA_BELOW */ [
            0x0626,
            0xFE89,
            0xFE8B,
            0xFE8C,
            0xFE8A
        ],
        /* YEH_HAMZA */ [
            0x0627,
            0xFE8D,
            null,
            null,
            0xFE8E
        ],
        /* ALEF */ [
            0x0628,
            0xFE8F,
            0xFE91,
            0xFE92,
            0xFE90
        ],
        /* BEH */ [
            0x0629,
            0xFE93,
            null,
            null,
            0xFE94
        ],
        /* TEH_MARBUTA */ [
            0x062A,
            0xFE95,
            0xFE97,
            0xFE98,
            0xFE96
        ],
        /* TEH */ [
            0x062B,
            0xFE99,
            0xFE9B,
            0xFE9C,
            0xFE9A
        ],
        /* THEH */ [
            0x062C,
            0xFE9D,
            0xFE9F,
            0xFEA0,
            0xFE9E
        ],
        /* JEEM */ [
            0x062D,
            0xFEA1,
            0xFEA3,
            0xFEA4,
            0xFEA2
        ],
        /* HAH */ [
            0x062E,
            0xFEA5,
            0xFEA7,
            0xFEA8,
            0xFEA6
        ],
        /* KHAH */ [
            0x062F,
            0xFEA9,
            null,
            null,
            0xFEAA
        ],
        /* DAL */ [
            0x0630,
            0xFEAB,
            null,
            null,
            0xFEAC
        ],
        /* THAL */ [
            0x0631,
            0xFEAD,
            null,
            null,
            0xFEAE
        ],
        /* REH */ [
            0x0632,
            0xFEAF,
            null,
            null,
            0xFEB0
        ],
        /* ZAIN */ [
            0x0633,
            0xFEB1,
            0xFEB3,
            0xFEB4,
            0xFEB2
        ],
        /* SEEN */ [
            0x0634,
            0xFEB5,
            0xFEB7,
            0xFEB8,
            0xFEB6
        ],
        /* SHEEN */ [
            0x0635,
            0xFEB9,
            0xFEBB,
            0xFEBC,
            0xFEBA
        ],
        /* SAD */ [
            0x0636,
            0xFEBD,
            0xFEBF,
            0xFEC0,
            0xFEBE
        ],
        /* DAD */ [
            0x0637,
            0xFEC1,
            0xFEC3,
            0xFEC4,
            0xFEC2
        ],
        /* TAH */ [
            0x0638,
            0xFEC5,
            0xFEC7,
            0xFEC8,
            0xFEC6
        ],
        /* ZAH */ [
            0x0639,
            0xFEC9,
            0xFECB,
            0xFECC,
            0xFECA
        ],
        /* AIN */ [
            0x063A,
            0xFECD,
            0xFECF,
            0xFED0,
            0xFECE
        ],
        /* GHAIN */ [
            0x0640,
            0x0640,
            0x0640,
            0x0640,
            0x0640
        ],
        /* TATWEEL */ [
            0x0641,
            0xFED1,
            0xFED3,
            0xFED4,
            0xFED2
        ],
        /* FEH */ [
            0x0642,
            0xFED5,
            0xFED7,
            0xFED8,
            0xFED6
        ],
        /* QAF */ [
            0x0643,
            0xFED9,
            0xFEDB,
            0xFEDC,
            0xFEDA
        ],
        /* KAF */ [
            0x0644,
            0xFEDD,
            0xFEDF,
            0xFEE0,
            0xFEDE
        ],
        /* LAM */ [
            0x0645,
            0xFEE1,
            0xFEE3,
            0xFEE4,
            0xFEE2
        ],
        /* MEEM */ [
            0x0646,
            0xFEE5,
            0xFEE7,
            0xFEE8,
            0xFEE6
        ],
        /* NOON */ [
            0x0647,
            0xFEE9,
            0xFEEB,
            0xFEEC,
            0xFEEA
        ],
        /* HEH */ [
            0x0648,
            0xFEED,
            null,
            null,
            0xFEEE
        ],
        /* WAW */ [
            0x0649,
            0xFEEF,
            null,
            null,
            0xFEF0
        ],
        /* ALEF_MAKSURA */ [
            0x064A,
            0xFEF1,
            0xFEF3,
            0xFEF4,
            0xFEF2
        ],
        /* YEH */ [
            0x067E,
            0xFB56,
            0xFB58,
            0xFB59,
            0xFB57
        ],
        /* PEH */ [
            0x06CC,
            0xFBFC,
            0xFBFE,
            0xFBFF,
            0xFBFD
        ],
        /* Farsi Yeh */ [
            0x0686,
            0xFB7A,
            0xFB7C,
            0xFB7D,
            0xFB7B
        ],
        /* Tcheh */ [
            0x06A9,
            0xFB8E,
            0xFB90,
            0xFB91,
            0xFB8F
        ],
        /* Keheh */ [
            0x06AF,
            0xFB92,
            0xFB94,
            0xFB95,
            0xFB93
        ],
        /* Gaf */ [
            0x0698,
            0xFB8A,
            null,
            null,
            0xFB8B
        ]
    ], combCharsMap = [
        [
            [
                0x0644,
                0x0622
            ],
            0xFEF5,
            null,
            null,
            0xFEF6
        ],
        /* LAM_ALEF_MADDA */ [
            [
                0x0644,
                0x0623
            ],
            0xFEF7,
            null,
            null,
            0xFEF8
        ],
        /* LAM_ALEF_HAMZA_ABOVE */ [
            [
                0x0644,
                0x0625
            ],
            0xFEF9,
            null,
            null,
            0xFEFA
        ],
        /* LAM_ALEF_HAMZA_BELOW */ [
            [
                0x0644,
                0x0627
            ],
            0xFEFB,
            null,
            null,
            0xFEFC
        ]
    ], transChars = [
        0x0610,
        /* ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM */ 0x0612,
        /* ARABIC SIGN ALAYHE ASSALLAM */ 0x0613,
        /* ARABIC SIGN RADI ALLAHOU ANHU */ 0x0614,
        /* ARABIC SIGN TAKHALLUS */ 0x0615,
        /* ARABIC SMALL HIGH TAH */ 0x064B,
        /* ARABIC FATHATAN */ 0x064C,
        /* ARABIC DAMMATAN */ 0x064D,
        /* ARABIC KASRATAN */ 0x064E,
        /* ARABIC FATHA */ 0x064F,
        /* ARABIC DAMMA */ 0x0650,
        /* ARABIC KASRA */ 0x0651,
        /* ARABIC SHADDA */ 0x0652,
        /* ARABIC SUKUN */ 0x0653,
        /* ARABIC MADDAH ABOVE */ 0x0654,
        /* ARABIC HAMZA ABOVE */ 0x0655,
        /* ARABIC HAMZA BELOW */ 0x0656,
        /* ARABIC SUBSCRIPT ALEF */ 0x0657,
        /* ARABIC INVERTED DAMMA */ 0x0658,
        /* ARABIC MARK NOON GHUNNA */ 0x0670,
        /* ARABIC LETTER SUPERSCRIPT ALEF */ 0x06D6,
        /* ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA */ 0x06D7,
        /* ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA */ 0x06D8,
        /* ARABIC SMALL HIGH MEEM INITIAL FORM */ 0x06D9,
        /* ARABIC SMALL HIGH LAM ALEF */ 0x06DA,
        /* ARABIC SMALL HIGH JEEM */ 0x06DB,
        /* ARABIC SMALL HIGH THREE DOTS */ 0x06DC,
        /* ARABIC SMALL HIGH SEEN */ 0x06DF,
        /* ARABIC SMALL HIGH ROUNDED ZERO */ 0x06E0,
        /* ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO */ 0x06E1,
        /* ARABIC SMALL HIGH DOTLESS HEAD OF KHAH */ 0x06E2,
        /* ARABIC SMALL HIGH MEEM ISOLATED FORM */ 0x06E3,
        /* ARABIC SMALL LOW SEEN */ 0x06E4,
        /* ARABIC SMALL HIGH MADDA */ 0x06E7,
        /* ARABIC SMALL HIGH YEH */ 0x06E8,
        /* ARABIC SMALL HIGH NOON */ 0x06EA,
        /* ARABIC EMPTY CENTRE LOW STOP */ 0x06EB,
        /* ARABIC EMPTY CENTRE HIGH STOP */ 0x06EC,
        /* ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE */ 0x06ED
    ];
    function characterMapContains(c) {
        for(var i = 0; i < charsMap.length; ++i){
            if (charsMap[i][0] === c) return true;
        }
        return false;
    }
    function getCharRep(c) {
        for(var i = 0; i < charsMap.length; ++i){
            if (charsMap[i][0] === c) return charsMap[i];
        }
        return false;
    }
    function getCombCharRep(c1, c2) {
        for(var i = 0; i < combCharsMap.length; ++i){
            if (combCharsMap[i][0][0] === c1 && combCharsMap[i][0][1] === c2) return combCharsMap[i];
        }
        // We should never reach here...
        // istanbul ignore next
        return false;
    }
    function isTransparent(c) {
        for(var i = 0; i < transChars.length; ++i){
            if (transChars[i] === c) return true;
        }
        return false;
    }
    function getOriginalCharsFromCode(code) {
        var j;
        for(j = 0; j < charsMap.length; ++j){
            if (charsMap[j].indexOf(code) > -1) return String.fromCharCode(charsMap[j][0]);
        }
        for(j = 0; j < combCharsMap.length; ++j){
            if (combCharsMap[j].indexOf(code) > -1) return String.fromCharCode(combCharsMap[j][0][0]) + String.fromCharCode(combCharsMap[j][0][1]);
        }
        return String.fromCharCode(code);
    }
    return {
        convertArabic: function(normal) {
            var crep, combcrep, shaped = "";
            for(var i = 0; i < normal.length; ++i){
                var current = normal.charCodeAt(i);
                if (characterMapContains(current)) {
                    var prev = null, next = null, prevID = i - 1, nextID = i + 1;
                    /*
           Transparent characters have no effect in the shaping process.
           So, ignore all the transparent characters that are BEFORE the
           current character.
           */ for(; prevID >= 0; --prevID){
                        if (!isTransparent(normal.charCodeAt(prevID))) break;
                    }
                    prev = prevID >= 0 ? normal.charCodeAt(prevID) : null;
                    crep = prev ? getCharRep(prev) : false;
                    if (!crep || crep[2] == null && crep[3] == null) prev = null; // prev character doesn’t connect with its successor
                    /*
           Transparent characters have no effect in the shaping process.
           So, ignore all the transparent characters that are AFTER the
           current character.
           */ for(; nextID < normal.length; ++nextID){
                        if (!isTransparent(normal.charCodeAt(nextID))) break;
                    }
                    next = nextID < normal.length ? normal.charCodeAt(nextID) : null;
                    crep = next ? getCharRep(next) : false;
                    if (!crep || crep[3] == null && crep[4] == null) next = null; // next character doesn’t connect with its predecessor
                    /* Combinations */ if (current === 0x0644 && next != null && (next === 0x0622 || next === 0x0623 || next === 0x0625 || next === 0x0627)) {
                        combcrep = getCombCharRep(current, next);
                        if (prev != null) shaped += String.fromCharCode(combcrep[4]);
                        else shaped += String.fromCharCode(combcrep[1]);
                        ++i;
                        continue;
                    }
                    crep = getCharRep(current);
                    /* Medial */ if (prev != null && next != null && crep[3] != null) {
                        shaped += String.fromCharCode(crep[3]);
                        continue;
                    } else /* Final */ if (prev != null && crep[4] != null) {
                        shaped += String.fromCharCode(crep[4]);
                        continue;
                    } else /* Initial */ if (next != null && crep[2] != null) {
                        shaped += String.fromCharCode(crep[2]);
                        continue;
                    } else shaped += String.fromCharCode(crep[1]);
                } else shaped += String.fromCharCode(current);
            }
            return shaped;
        },
        // convert from Arabic Presentation Forms B
        convertArabicBack: function(apfb) {
            var toReturn = "", selectedChar;
            var i;
            theLoop: for(i = 0; i < apfb.length; ++i){
                selectedChar = apfb.charCodeAt(i);
                toReturn += getOriginalCharsFromCode(selectedChar);
            }
            return toReturn;
        }
    };
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["a1dc5","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.788a9e14.js.map
