import React from 'react'

const ContactUs = () => {
  return (
    <div className='flex w-full py-[3.75rem] px-[3.75rem] footer text-white justify-between'>
        <div className="flex flex-col gap-2">
            <p className='heading3 font-medium'>
                Need more information?
            </p>
            <p className='heading3'>
            Write your concern to us and we will get back to you.
            </p>
        </div>
        <button className="buttonMedium bg-primary rounded">
          Contact Us
        </button>
    </div>
  )
}

export default ContactUs