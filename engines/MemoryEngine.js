/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import DuplicateError from '../DuplicateError.js';

export default class MemoryEngine {
  constructor() {
    this._store = {};
  }

  create({id, object}) {
    if(id in this._store) {
      throw new DuplicateError(`"id" (${id}) is already in use.`);
    }
    this._store[id] = object;
  }

  delete({id}) {
    if(id in this._store) {
      delete this._store[id];
      return true;
    }
    return false;
  }

  get({id}) {
    return this._store[id];
  }
}
