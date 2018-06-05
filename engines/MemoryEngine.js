/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import UUID from 'pure-uuid';

const store = {};

export class MemoryEngine {
  constructor() {
    this._id = new UUID(4).format();
    store[this._id] = {};
  }

  delete() {
    delete store[this._id];
    return true;
  }

  get() {
    return store[this._id];
  }

  id() {
    return this._id;
  }
}
