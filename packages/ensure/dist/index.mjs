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
export {
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
};
