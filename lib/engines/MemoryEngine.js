/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {DuplicateError} from '../DuplicateError.js';

export class MemoryEngine {
  constructor() {
    this._store = new Map();
  }

  create({id, object} = {}) {
    if(this._store.has(id)) {
      throw new DuplicateError(`"id" (${id}) is already in use.`);
    }
    return this._store.set(id, object);
  }

  delete({id} = {}) {
    return this._store.delete(id);
  }

  get({id} = {}) {
    return this._store.get(id);
  }
}
