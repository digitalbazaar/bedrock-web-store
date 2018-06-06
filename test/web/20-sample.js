import {store, MemoryEngine} from 'bedrock-web-store';

describe('Test 2', () => {
  it('20-sample', done => {
    const foo = {a: 1, b: 2};

    store.setEngine({engine: new MemoryEngine()});
    store.create({id: '123', object: foo});

    const obj = store.get({id: '123'});

    obj.should.be.not.empty;
    done();
  });
});
