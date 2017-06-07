import {
  Collection
} from '../collection'

export function createInvoices(config, opts) {
  return new Invoices(config, opts)
}

class Invoices extends Collection {
  constructor(config, opts = {}) {
    super('Invoice', 'invoices', config, opts)
  }
}