import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import contactForm from './customerDetails'
import customerOrder from './customerOrders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,customerOrder,contactForm],
}


