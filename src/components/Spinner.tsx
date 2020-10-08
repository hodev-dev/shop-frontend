import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  return (
    <>
      <div className={'relative flex items-center justify-center w-full h-16 text-3xl bg-dark-100'}>
        <Loader type="Bars" color="#FFFFFF" height={50} width={50} />
      </div>
    </>
  )
}

export default Spinner
