// ==UserScript==
// @name         TikTok Hook
// @namespace    http://tampermonkey.net/
// @version      2
// @description  Monitor and view TikTok live streams
// @author       Marksmanship256
// @match        https://www.tiktok.com/setting
// @match        https://www.tiktok.com/messages
// @icon         https://www.google.com/s2/favicons?domain=tiktok.com
//
// @updateURL    https://raw.githubusercontent.com/Marksmanship256/ttk-hook/main/tiktok-hook.user.js
// @downloadURL  https://raw.githubusercontent.com/Marksmanship256/ttk-hook/main/tiktok-hook.user.js
//
// --- DEPENDENCIES ORDER MATTERS ---
// @require      file:///D:/Hub/ttk/favorites.js
// @require      https://raw.githubusercontent.com/Marksmanship256/ttk-hook/main/mpegts.js
// @require      https://raw.githubusercontent.com/Marksmanship256/ttk-hook/main/app.min.js
//
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @connect      localhost
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    console.log("TikTok Hook initialized. Favorites loaded locally, logic loaded from GitHub.");
})();