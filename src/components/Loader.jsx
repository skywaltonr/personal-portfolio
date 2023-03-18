import { useProgress, Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const {progress} = useProgress()
  return (
    <Html
    >
      <div className='w-fit border rounded-xl border-white p-3'>
          {progress.toFixed(2)}%
      </div>
    </Html>
  )
}

export default Loader