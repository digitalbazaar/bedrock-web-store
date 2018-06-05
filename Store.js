/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import MemoryEngine from './engines/MemoryEngine';

export default class Store {
  constructor({type = 'memory'} = {}) {
    if(type === 'memory') {
      this._engine = new MemoryEngine();
    }
  }

  delete() {
    return this._engine.delete();
  }

  get() {
    return this._engine.get();
  }

  id() {
    return this.engine.id();
  }

  set(obj) {
    return this._engine.set(obj);
  }
}
