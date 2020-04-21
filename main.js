/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import Store from './Store.js';

export const store = new Store();
export default store;
export {default as MemoryEngine} from './engines/MemoryEngine.js';
export {default as createProxy} from './createProxy.js';
export {Store};
