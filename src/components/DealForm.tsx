'use client'

import { useRef, useEffect } from 'react'
import { useFormState } from 'react-dom'
import toast from 'react-hot-toast'

import { StringMap } from '../app/_types/deal'
import { DealFormState } from '../app/_types/deal'
import { formHandlerAction } from '../app/_actions/formHandler'
import SubmitButton from '../components/SubmitButton'

const initialState: DealFormState<StringMap> = {}

const DealForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [serverState, formAction] = useFormState(formHandlerAction, initialState)

  useEffect(() => {
    if (serverState.successMsg) {
      toast.success(serverState.successMsg)
      formRef.current?.reset()
    }
  }, [serverState])

  return (
    <form className='w-full' action={formAction} ref={formRef}>
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
            defaultValue={serverState.data?.name}
          />
          <div className='min-h-8'>
            {serverState.errors?.name && (
              <small className='text-red-400'>{serverState.errors?.name}</small>
            )}
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
            defaultValue={serverState.data?.link}
          />
          <div className='min-h-8'>
            {serverState.errors?.link && (
              <small className='text-red-400'>{serverState.errors?.link}</small>
            )}
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
            defaultValue={serverState.data?.couponCode}
          />
          <div className='min-h-8'>
            {serverState.errors?.couponCode && (
              <small className='text-red-400'>{serverState.errors?.couponCode}</small>
            )}
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
            defaultValue={serverState.data?.discount}
          />
          <div className='min-h-8'>
            {serverState.errors?.discount && (
              <small className='text-red-400'>{serverState.errors?.discount}</small>
            )}
          </div>
        </div>
        <SubmitButton />
      </div>
    </form>
  )
}

export default DealForm
