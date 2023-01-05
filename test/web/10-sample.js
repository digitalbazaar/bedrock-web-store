/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
import store, {MemoryEngine} from '@bedrock/web-store';

describe('Default Store', () => {
  it('Store should throw error if storage engine is not set', done => {
    const foo = {a: 1, b: 2};

    expect(() => store.create({id: '123', object: foo}))
      .to.throw(/No storage engine set./);

    expect(() => store.get({id: '123'}))
      .to.throw(/No storage engine set./);

    expect(() => store.delete({id: '123'}))
      .to.throw(/No storage engine set./);

    done();
  });

  it('Store should reject creating anything that is not an object', done => {
    store.setEngine({engine: new MemoryEngine()});

    expect(() => store.create({id: '123', object: 'foo'}))
      .to.throw(/must be an object/);

    done();
  });
});
