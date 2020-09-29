import React from 'react'
import Card from './Card'

const Collection = () => {
  return (
    <>
      <div className={"flex flex-row-reverse items-center w-full h-16 p-8 border border-black bg-dark-300"}>
        <h2 className={"text-3xl text-white"}>تخفیف ویژه</h2>
        <h4 className={"flex-1 text-white text-1xl"}>موارد بیشتر</h4>
      </div>
      <div dir="rtl" className={"flex w-full h-auto p-8 overflow-x-scroll border border-black bg-dark-200"}>
        <Card />
      </div>
    </>
  )
}

export default Collection