/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
export class Store {
  constructor({engine = null} = {}) {
    this._engine = engine;
  }

  setEngine({engine} = {}) {
    assertObject(engine, 'engine');
    this._engine = engine;
  }

  create({id, object} = {}) {
    assertEngine(this);
    assertString(id, 'id');
    assertObject(object, 'object');
    // note: an engine can return a Promise here
    return this._engine.create({id, object});
  }

  delete({id} = {}) {
    assertEngine(this);
    assertString(id, 'id');
    // note: an engine can return a Promise here
    return this._engine.delete({id});
  }

  get({id} = {}) {
    assertEngine(this);
    assertString(id, 'id');
    // note: an engine can return a Promise here
    return this._engine.get({id});
  }
}

function assertEngine(store) {
  if(!store._engine) {
    throw new Error('No storage engine set.');
  }
}

function assertObject(x, name) {
  if(typeof x !== 'object') {
    throw new TypeError(`"${name}" must be an object.`);
  }
}

function assertString(x, name) {
  if(typeof x !== 'string') {
    throw new TypeError(`"${name}" must be a string.`);
  }
}
