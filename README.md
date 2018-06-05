# bedrock-web-store
Shared storage for Bedrock Web Apps

# Usage

```
npm install bedrock-web-store
```

## Simple default singleton storage

The most common setup for a Web App is to use a single instance of shared
storage across the application. Namespacing can be achieved via the `id`
parameter.

In setup file:

```js
import {store} from 'bedrock-web-store';
import {MemoryEngine} from 'bedrock-web-store';

store.setEngine({engine: new MemoryEngine()});
```

In file 1:

```js
import {store} from 'bedrock-web-store';

const foo = {a: 1, b: 2};

store.set({id: '123', record: foo});
```

In file 2:

```js
import {store} from 'bedrock-web-store';

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
import {Store} from 'bedrock-web-store';
import {MemoryEngine} from 'bedrock-web-store';

export const stores = {};

stores.foos = new Store({engine: new MemoryEngine()});
stores.bars = new Store({engine: new MemoryEngine()});
```

In file 1:

```js
import {stores} from './myStores.js';

const foo = {a: 1, b: 2};
stores.foos.set({id: '123', record: foo});

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
