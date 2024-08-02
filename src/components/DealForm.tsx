const DealForm = () => {
  return (
    <form className='w-full'>
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
            minLength={5}
          />
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
            title='Please enter a valid URL'
          />
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
            minLength={5}
          />
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
        </div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default DealForm
