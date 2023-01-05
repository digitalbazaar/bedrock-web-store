# bedrock-web-store

A module for creating shared storage for Bedrock Web Apps. The design requires
stored objects to have only one instance in memory. The objects may be backed
by a persistent storage layer such as `localStorage` or `IndexedDB`. Whether
or not persistent storage is used is determined by the underlying engine
associated with a particular `Store` instance.

It is important to note that even if a persistent storage mechanism is used,
any objects retrieved from storage via the `Store` API will have only *one*
in-memory copy, ensuring that frontend components will share the same
instance. That is to say that a naive implementation of a `Store` engine
that simply maps the API onto, for example, `localForage` or `localStorage`
would break this guarantee. There must also be a shared memory layer.

# Usage

```
npm install @bedrock/web-store
```

## Simple default singleton storage

The most common setup for a Web App is to use a single instance of shared
storage across the application. Namespacing can be achieved via the `id`
parameter.

In setup file:

```js
import {store, MemoryEngine} from '@bedrock/web-store';

store.setEngine({engine: new MemoryEngine()});
```

In file 1:

```js
import {store} from '@bedrock/web-store';

const foo = {a: 1, b: 2};

store.create({id: '123', object: foo});
```

In file 2:

```js
import {store} from '@bedrock/web-store';

const foo = store.get({id: '123'});

console.log(foo.a);
// yields "1"
```

## Multiple stores

More complex Web Apps may have a reason for partitioning storage into different
instances. This could be done for namespacing purposes where `id`s would
otherwise clash or because different storage engines are needed for different
purposes. In this case, the `Store` class can be imported and multiple
instances (potentially with different engines) can be created and managed by
the Web App.

In custom `myStores.js`:

```js
import {Store, MemoryEngine} from '@bedrock/web-store';

export const stores = {};

stores.foos = new Store({engine: new MemoryEngine()});
stores.bars = new Store({engine: new MemoryEngine()});
```

In file 1:

```js
import {stores} from './myStores.js';

const foo = {a: 1, b: 2};
stores.foos.create({id: '123', object: foo});

// ...
```

In file 2:

```js
import {stores} from './myStores.js';

const foo = stores.foos.get({id: '123'});
// same `foo` as file 1

// ...

const bar = stores.bars.get({id: '123'});
// `bar` is undefined
```
