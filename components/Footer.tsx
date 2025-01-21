const Footer = () => {
  return (
    <div className='text-center w-full h-[14vh] bg-green flex justify-center items-center flex-col'>
      <h5 className='text-lg'>
        Have queries? Write to us at{' '}
        <span style={{color:'white'}}>zephyr@tisb.ac.in</span>
      </h5>
      <p className='font-[700] mt-1' style={{ color: 'white' }}>
        TISB ZEPHYR © All rights reserved.
      </p>
    </div>
  )
}

export default Footer
