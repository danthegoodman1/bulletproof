import { KV } from "./kv.js"

export class Client {
  private kv: KV

  constructor(kv: KV) {
    this.kv = kv
  }
}
