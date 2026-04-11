[**@axijs/emitter**](../README.md)

***

[@axijs/emitter](../README.md) / Subscription

# Class: Subscription

Defined in: subscription.ts:7

Represents a disposable resource, such as the execution of an Observable or an Event Listener.
Allows grouping multiple teardown logic into a single unit (Composite Subscription).

## Implements

- [`Unsubscribable`](../interfaces/Unsubscribable.md)

## Constructors

### Constructor

> **new Subscription**(`teardown?`): `Subscription`

Defined in: subscription.ts:21

#### Parameters

##### teardown?

() => `void`

Optional initial teardown logic to execute when unsubscribed.

#### Returns

`Subscription`

## Accessors

### closed

#### Get Signature

> **get** **closed**(): `boolean`

Defined in: subscription.ts:14

Indicates whether this subscription has already been unsubscribed.

##### Returns

`boolean`

## Methods

### add()

> **add**(`teardown`): `void`

Defined in: subscription.ts:32

Adds a teardown logic to this subscription.
If the subscription is already closed, the teardown is executed immediately.

#### Parameters

##### teardown

[`Unsubscribable`](../interfaces/Unsubscribable.md) \| (() => `void`)

A function or another Unsubscribable object to be managed.

#### Returns

`void`

***

### unsubscribe()

> **unsubscribe**(): `void`

Defined in: subscription.ts:45

Disposes the resources held by the subscription.
Executes all attached teardown logic and clears the list.

#### Returns

`void`

#### Implementation of

[`Unsubscribable`](../interfaces/Unsubscribable.md).[`unsubscribe`](../interfaces/Unsubscribable.md#unsubscribe)
