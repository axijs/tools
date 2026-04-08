"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  isBoolean: () => isBoolean,
  isEmpty: () => isEmpty,
  isFunction: () => isFunction,
  isIterable: () => isIterable,
  isNull: () => isNull,
  isNullOrUndefined: () => isNullOrUndefined,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPromise: () => isPromise,
  isString: () => isString,
  isUndefined: () => isUndefined,
  throwError: () => throwError,
  throwIf: () => throwIf,
  throwIfEmpty: () => throwIfEmpty
});
module.exports = __toCommonJS(index_exports);

// src/guards.ts
function isNull(val) {
  return val === null;
}
function isUndefined(val) {
  return val === void 0;
}
function isNullOrUndefined(val) {
  return val === null || val === void 0;
}
function isNumber(val) {
  return typeof val === "number";
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isString(val) {
  return typeof val === "string";
}
function isObject(value) {
  return !isNullOrUndefined(value) && !Array.isArray(value) && typeof value === "object";
}
function isFunction(value) {
  return typeof value === "function";
}
function isPromise(value) {
  return value != null && isFunction(value.then);
}
function isIterable(value) {
  return !isNullOrUndefined(value) && isFunction(value[Symbol.iterator]);
}
function isEmpty(value) {
  return isNullOrUndefined(value) || isString(value) && !value.length || Array.isArray(value) && !value.length || isObject(value) && !Object.keys(value).length;
}

// src/assertion.ts
function throwIf(condition, message) {
  if (condition) {
    throw new Error(message);
  }
}
function throwIfEmpty(value, message) {
  throwIf(isEmpty(value), message);
}
function throwError(message) {
  throw new Error(message);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isBoolean,
  isEmpty,
  isFunction,
  isIterable,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPromise,
  isString,
  isUndefined,
  throwError,
  throwIf,
  throwIfEmpty
});
