'use server'

import { dealSchema } from '../_schemas/deal'
import { DealFormState } from '../_types/deal'
import { convertZodErrors } from '../_utils/errors'

export const formHandlerAction = async (formData: FormData): Promise<DealFormState<undefined>> => {
  const unvalidatedDeal = {
    name: formData.get('name'),
    link: formData.get('link'),
    couponCode: formData.get('couponCode'),
    discount: formData.get('discount'),
  }

  const validated = dealSchema.safeParse(unvalidatedDeal)

  if (!validated.success) {
    console.log(validated.error, 'validated.error')
    const errors = convertZodErrors(validated.error)
    console.log(errors, 'errors')
    return { errors }
  } else {
    return { successMsg: 'Deal added successfully' }
  }
}
