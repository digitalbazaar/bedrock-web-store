/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {Store} from './Store.js';

export const store = new Store();
export default store;
export {MemoryEngine} from './engines/MemoryEngine.js';
export {createProxy} from './createProxy.js';
export {Store};
