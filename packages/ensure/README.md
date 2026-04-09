# @axijs/ensure

[![NPM version](https://img.shields.io/npm/v/@axijs/ensure.svg)](https://www.npmjs.com/package/@axijs/ensure)

A lightweight, zero-dependency collection of TypeScript type guards and assertions. 

Designed to ensure type safety and handle runtime validation cleanly without the boilerplate.

## Installation

```bash
npm install @axijs/ensure
# or
pnpm add @axijs/ensure
# or
yarn add @axijs/ensure
```

## Features

- **Zero dependencies**: Extremely lightweight.
- **Strict Type Guards**: Safely narrow down types (e.g., `isObject` correctly filters out `null` and arrays).
- **Assertion Utilities**: Clean flow control with `throwIf` and `throwIfEmpty`.

## Usage

### 1. Assertions & Flow Control
Use assertions to enforce conditions.

```typescript
import { throwIfEmpty, throwIf, throwError } from '@axijs/ensure';

// Example: Narrowing a potentially undefined value
const user: { name: string } | undefined = findUser();

throwIfEmpty(user, 'User not found'); 
console.log(user.name);

// Example: Conditional throwing
const isInvalid = validate(data);
throwIf(isInvalid, 'Data validation failed');

// Example: Unconditional throw
function notImplemented(): never {
  throwError('This feature is coming soon');
}
```

### 2. Type Guards
Check types safely at runtime while giving TypeScript the correct type context.

```typescript
import { isString, isObject, isPromise, isIterable } from '@axijs/ensure';

const data: unknown = fetchData();

if (isString(data)) {
  console.log(data.toUpperCase());
}

if (isObject(data)) {
  // True plain object (not null, not array)
  console.log(Object.keys(data)); 
}

if (isPromise(data)) {
  data.then(resolve);
}

if (isIterable(data)) {
  for (const item of data) {
    console.log(item);
  }
}
```

### 3. Emptiness Check
A single utility to check if a value is conceptually "empty".

```typescript
import { isEmpty } from '@axijs/ensure';

isEmpty({});         // true
isEmpty(0);          // false
isEmpty(false);      // false
```

## API Documentation

For a complete list of available type guards, assertions, and their detailed descriptions, 
please visit the [API Documentation](https://github.com/axijs/tools/tree/main/packages/ensure/docs/api).

## License

MIT
