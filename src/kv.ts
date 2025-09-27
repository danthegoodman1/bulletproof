export interface KVKeyOps {
  get(key: string): Promise<any | undefined>;
  set(key: string, value: any): Promise<any | undefined>;
  delete(key: string): Promise<any | undefined>;
}


export interface KVTransaction extends KVKeyOps {
  commit(): Promise<void>;
  rollback(): Promise<void>;
}

export interface KV extends KVKeyOps {
  transaction(): Promise<KVTransaction>;
}
