/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import UUID from 'pure-uuid';

export default class MemoryEngine {
  constructor() {
    this._id = new UUID(4).format();
    this._store = {};
    this._store[this._id] = {};
  }

  delete() {
    delete this._store[this._id];
    return true;
  }

  get() {
    return this._store[this._id];
  }

  id() {
    return this._id;
  }

  set(obj) {
    this._store[this._id] = obj
    return this._store[this._id];
  }
}
