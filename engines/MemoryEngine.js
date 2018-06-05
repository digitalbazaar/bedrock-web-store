/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import uuidv4 from 'uuid/v4';

const store = {};

export class MemoryEngine {
  constructor() {
    this._id = uuidv4();
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
