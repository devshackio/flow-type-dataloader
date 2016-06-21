# flow-type-dataloader

Simply drop into a directory listed in .flowconfig's [libs] and enjoy

### Example Usages
```javascript
/* @flow */
import DataLoader from 'dataloader';

type IdLoader = DataLoader<string, Object>;
type ArrayLoader<T> = DataLoader<string, Array<T>>;

function createExampleLoader1(): IdLoader {
  return new DataLoader(idsToFind => {
    let item1 = {};
    return Promise.resolve([item1]);
  });
}

type CustomType = { s: string, b: boolean };
function createExampleLoader2(): ArrayLoader<CustomType> {
  return new DataLoader(typesToFind => {
    let item1 = { s: 'foo', b: true };
    let item2 = { s: 'bar', b: false };
    return Promise.resolve([ [item1, item2] ]);
  });
}

type InputObj = { keyA: string, keyB: string };
function createExampleLoader3(): DataLoader<InputObj, {result:any}> {
  return new DataLoader(objsToFind => {
    return Promise.resolve([{
      result: 'world',
    }]);
  });
}

function createLoaders() {
  return {
    itemById: createExampleLoader1(),
    itemsByType: createExampleLoader2(),
    itemsByObjInput: createExampleLoader3(),
  };
}

let loaders = createLoaders();

loaders.itemById.load('itemId');
loaders.itemsByType.loadMany(['typeToLoad','anotherType']);
loaders.itemsByObjInput.load({ keyA: 'foo', keyB: 'bar'});
```
