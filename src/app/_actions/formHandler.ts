'use server'

import { dealSchema } from '../_schemas/deal'
import { DealFormState, StringMap } from '../_types/deal'
import { convertZodErrors } from '../_utils/errors'

export const sleep = (ms: number) => {
  new Promise(resolve => setTimeout(resolve, ms))
}

export const formHandlerAction = async (
  prevState: DealFormState<StringMap>,
  formData: FormData
): Promise<DealFormState<StringMap>> => {
  const unvalidatedDeal: StringMap = {
    name: formData.get('name') as string,
    link: formData.get('link') as string,
    couponCode: formData.get('couponCode') as string,
    discount: formData.get('discount') as string,
  }

  await sleep(10000)

  const validated = dealSchema.safeParse(unvalidatedDeal)

  if (!validated.success) {
    console.log(validated.error, 'validated.error')
    const errors = convertZodErrors(validated.error)
    console.log(errors, 'errors')
    return { errors, data: unvalidatedDeal }
  } else {
    return { successMsg: 'Deal added successfully', errors: {}, data: {} }
  }
}
