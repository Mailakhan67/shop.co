import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import orders from './customerOrders'
import contactForm from './customerDetails'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,orders,contactForm],
}


