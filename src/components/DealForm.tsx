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
          />
        </div>

        <div>
          <label className='block' htmlFor='discount'>
            Discount (%)
          </label>
          <input
            type='text'
            name='discount'
            id='discount'
            className='w-full p-2 rounded-md text-gray-900'
          />
        </div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default DealForm
