import { KV, KVTransaction } from "../kv.js"

export class MemoryKV implements KV {
  private readonly store: Record<string, any> = {}

  constructor() {}

  async get(key: string): Promise<any | undefined> {
    return this.store[key]
  }

  async set(key: string, value: any): Promise<any | undefined> {
    this.store[key] = value
  }

  async delete(key: string): Promise<any | undefined> {
    delete this.store[key]
  }

  async transaction(): Promise<KVTransaction> {
    return new MemoryKVTransaction(this)
  }
}

export class MemoryKVTransaction implements KVTransaction {
  private kv: MemoryKV

  constructor(kv: MemoryKV) {
    this.kv = kv
  }

  async get(key: string): Promise<any | undefined> {
    return this.kv.get(key)
  }

  async set(key: string, value: any): Promise<any | undefined> {
    return this.kv.set(key, value)
  }

  async delete(key: string): Promise<any | undefined> {
    return this.kv.delete(key)
  }

  /**
   * No-op
   */
  async commit(): Promise<void> {
    return
  }

  /**
   * No-op
   */
  async rollback(): Promise<void> {
    return
  }
}
