import { z } from 'zod'

export const dealSchema = z.object({
  name: z.string({ message: 'Name is required' }).min(5, 'Name should have at least 5 characters'),
  link: z.string({ message: 'Link is required' }).url('Link must be a valid URL.'),
  couponCode: z
    .string({ message: 'Coupon Code is required' })
    .min(5, 'Coupon code should have at least 5 characters'),
  discount: z.coerce
    .number({ message: 'Discount percentage is required' })
    .min(1, 'Discount percentage must be greater than 1.')
    .max(100, 'Discount percentage must be less than or equal to 100.'),
})
