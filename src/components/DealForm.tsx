'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

import { StringMap } from '../app/_types/deal'
import { formHandlerAction } from '../app/_actions/formHandler'

const DealForm = () => {
  const [errors, setErrors] = useState<StringMap>({})

  const handleFormSubmit = async (formData: FormData) => {
    const { errors, successMsg } = await formHandlerAction(formData)
    if (errors) {
      setErrors(errors)
    } else if (successMsg) {
      toast.success('Deal submitted!')
    }
  }

  return (
    <form className='w-full' action={handleFormSubmit}>
      <div className='flex flex-col gap-y-4'>
        <div>
          <label className='block' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='w-full p-2 rounded-md text-gray-900'
            required
            // minLength={5}
          />
          <div className='min-h-8'>
            {errors?.name && <small className='text-red-400'>{errors.name}</small>}
          </div>
        </div>

        <div>
          <label className='block' htmlFor='link'>
            Link (must start with https://)
          </label>
          <input
            type='text'
            name='link'
            id='link'
            className='w-full p-2 rounded-md text-gray-900'
            required
            pattern='[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?'
            // title='Please enter a valid URL'
          />
          <div className='min-h-8'>
            {errors?.link && <small className='text-red-400'>{errors.link}</small>}
          </div>
        </div>

        <div>
          <label className='block' htmlFor='couponCode'>
            Coupon Code
          </label>
          <input
            type='text'
            name='couponCode'
            id='couponCode'
            className='w-full p-2 rounded-md text-gray-900'
            required
            // minLength={5}
          />
          <div className='min-h-8'>
            {errors?.couponCode && <small className='text-red-400'>{errors.couponCode}</small>}
          </div>
        </div>

        <div>
          <label className='block' htmlFor='discount'>
            Discount (%)
          </label>
          <input
            type='number'
            name='discount'
            id='discount'
            min={1}
            max={100}
            required
            className='w-full p-2 rounded-md text-gray-900'
          />
          <div className='min-h-8'>
            {errors?.discount && <small className='text-red-400'>{errors.discount}</small>}
          </div>
        </div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default DealForm
