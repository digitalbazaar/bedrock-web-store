/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

export default class Store {
  constructor({engine = null} = {}) {
    this._engine = engine;
  }

  setEngine({engine}) {
    if(typeof engine !== 'object') {
      throw new TypeError('"engine" must be an object.');
    }
    this._engine = engine;
  }

  delete({id}) {
    assertEngine(this);
    assertString(id, 'id');
    // note: an engine can return a Promise here
    return this._engine.delete({id});
  }

  get({id}) {
    assertEngine(this);
    assertString(id, 'id');
    // note: an engine can return a Promise here
    return this._engine.get({id});
  }

  set({id, record}) {
    assertEngine(this);
    assertString(id, 'id');
    // note: an engine can return a Promise here
    return this._engine.set({id, record});
  }
}

function assertEngine(store) {
  if(!store._engine) {
    throw new Error('No storage engine set.');
  }
}

function assertString(x, name) {
  if(typeof x !== 'string') {
    throw new TypeError(`"${name}" must be a string.`);
  }
}
