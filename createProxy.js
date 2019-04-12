/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

export default function createProxy(x, {
  addProperty = defaultPropertySetter,
  setProperty = defaultPropertySetter
} = {}) {
  const map = new WeakMap();
  const handler = {
    get(target, key) {
      const value = target[key];
      if(typeof value === 'object' && value !== null) {
        let proxy = map.get(value);
        if(!proxy) {
          proxy = new Proxy(value, handler);
          map.set(value, proxy);
        }
        return proxy;
      }
      return value;
    },
    set(target, key, value) {
      if(!target.hasOwnProperty(key)) {
        addProperty(target, key, value);
      } else {
        setProperty(target, key, value);
      }
      return true;
    }
  };
  return new Proxy(x, handler);
}

function defaultPropertySetter(target, key, value) {
  target[key] = value;
}
