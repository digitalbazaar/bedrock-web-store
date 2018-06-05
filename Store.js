/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

export default class Store {
  constructor({engine = null} = {}) {
    this._engine = engine;
  }

  setEngine({engine}) {
    assertObject(engine, 'engine');
    this._engine = engine;
  }

  delete({key}) {
    assertEngine(this);
    assertString(key, 'key');
    // note: an engine can return a Promise here
    return this._engine.delete({key});
  }

  get({key}) {
    assertEngine(this);
    assertString(key, 'key');
    // note: an engine can return a Promise here
    return this._engine.get({key});
  }

  set({id, object}) {
    assertEngine(this);
    assertString(id, 'id');
    assertObject(object, 'object');
    // note: an engine can return a Promise here
    return this._engine.set({id, object});
  }
}

function assertEngine(store) {
  if(!store._engine) {
    throw new Error('No storage engine set.');
  }
}

function assertObject(x, name) {
  if(typeof engine !== 'object') {
    throw new TypeError(`"${name}" must be a object.`);
  }
}

function assertString(x, name) {
  if(typeof x !== 'string') {
    throw new TypeError(`"${name}" must be a string.`);
  }
}
