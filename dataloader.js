declare module 'dataloader' {
  declare class DataLoader<K, V> {
    constructor(
      batchLoader: (keys: Array<K>) => Promise<Array<V | Error>>,
      options?: {
        batch?: boolean;
        cache?: boolean;
        cacheKeyFn?: (key: any) => any;
        cacheMap?: {
          get(key: K): V | void;
          set(key: K, value: V): any;
          delete(key: K): any;
          clear(): any;
        };
      },
    ): void;
    load(key: K): Promise<V>;
    loadMany(keys: Array<K>): Promise<Array<V>>;
    clear(key: K): this;
    clearAll(): this;
    prime(key: K, value: V): this;
  }
  declare var exports: typeof DataLoader;
}
