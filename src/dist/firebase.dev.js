"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

var configApp = (0, _app.initializeApp)({
  apiKey: "AIzaSyA-_xYBlefpYjDFpa3eyXUXTAIynfjCKcw",
  authDomain: "userimage-fa88e.firebaseapp.com",
  projectId: "userimage-fa88e",
  storageBucket: "userimage-fa88e.appspot.com",
  messagingSenderId: "828779399998",
  appId: "1:828779399998:web:f5ad43cf372bfc15fffa6f"
});
var db = (0, _firestore.getFirestore)(configApp);
var _default = db;
exports["default"] = _default;