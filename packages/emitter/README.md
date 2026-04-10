# @axijs/emitter

[![NPM version](https://img.shields.io/npm/v/@axijs/emitter.svg)](https://www.npmjs.com/package/@axijs/emitter)

A minimalistic, type-safe library for single-event and state emitting. 

Inspired by the Observer pattern and RxJS (like `BehaviorSubject`), 
it provides a clean way to manage subscriptions.

## Installation

```bash
npm install @axijs/emitter
# or
pnpm add @axijs/emitter
# or
yarn add @axijs/emitter
```

## Features

- **Strictly Typed**: Full TypeScript support for event arguments.
- **No Magic Strings**: Object-based emitters instead of string keys (e.g., `on('event-name')`).
- **State Emitting**: `StateEmitter` remembers the last emitted value and immediately triggers new subscribers.
- **Composite Subscriptions**: Easily group multiple subscriptions and teardown logic into a single `Subscription` object to prevent memory leaks.

## Usage

### 1. Basic Event Emitter
Create an isolated, strongly-typed event emitter.

```typescript
import { Emitter } from '@axijs/emitter';

// Define an emitter that expects a string and a number
const onPlayerMove = new Emitter<[string, number]>();

// Subscribe to the event
const sub = onPlayerMove.subscribe((player, x) => {
  console.log(`${player} moved to ${x}`);
});

// Fire the event
onPlayerMove.emit('Alice', 10); 

// Subscribe to fire only once
onPlayerMove.once((player, x) => {
  console.log('This will only run once!');
});

// Unsubscribe when no longer needed
sub.unsubscribe();
```

### 2. State Emitter
Acts like a state container (similar to `BehaviorSubject`). 
It holds the latest value and immediately provides it to new subscribers.

```typescript
import { StateEmitter } from '@axijs/emitter';

// Initialize with a default state
const health = new StateEmitter<[number]>([100]);

// New subscribers immediately receive the current state (100)
health.subscribe((currentHealth) => {
  console.log(`Health is: ${currentHealth}`);
});

// Emit a new state. All listeners will be notified.
health.emit(80);

// Get current state synchronously without subscribing
console.log(health.value); // [80]
```

### 3. Composite Subscriptions
Group multiple unsubscriptions together. Very useful for cleaning up UI components or game objects.

```typescript
import { Emitter, Subscription } from '@axijs/emitter';

const onJump = new Emitter<[]>();
const onShoot = new Emitter<[]>();

const masterSub = new Subscription();

// Add multiple subscriptions to the master Subscription
masterSub.add(onJump.subscribe(() => console.log('Jumped!')));
masterSub.add(onShoot.subscribe(() => console.log('Pew pew!')));

// You can also add custom teardown functions
masterSub.add(() => {
  console.log('Custom cleanup logic executed');
});

// Later, when the component/object is destroyed:
masterSub.unsubscribe(); 
// This automatically unsubscribes from both events and runs the custom logic
```

## API Documentation

For a complete list of classes, interfaces, and methods, please visit the [API Documentation](https://github.com/axijs/tools/tree/main/packages/emitter/docs/api).

## License

MIT
```

## License

MIT
