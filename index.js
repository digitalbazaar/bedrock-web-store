/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import Store from './Store.js';

export const store = new Store();
export default store;
export {MemoryEngine} from './engines/MemoryEngine.js';
export {Store};
