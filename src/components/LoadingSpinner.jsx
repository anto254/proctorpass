import React from 'react'
import { SpinnerDotted } from 'spinners-react';
function LoadingSpinner() {
  return (
    <div className=' p-6 '>
    <SpinnerDotted size={60} thickness={150} speed={150} color="green" />

    </div>
  )
}

export default LoadingSpinner