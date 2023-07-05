import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className="table-loader d-flex justify-content-center align-items-center w-100">
      <CircularProgress color="inherit" />
    </div>
  )
}
export default Loading
