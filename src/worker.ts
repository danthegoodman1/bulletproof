import { KV } from "./kv.js"

export class Worker {
  private kv: KV

  constructor(kv: KV) {
    this.kv = kv
  }
}
