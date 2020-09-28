import React from 'react'

const Card = () => {
  return (
    <>
      <div className={"w-1/6 h-auto mx-5 rounded-lg shadow-xl min-w-16 bg-dark-100"}>
        <img className={"object-cover w-full h-64"} src={require('../assets/img/batman.jpg')} alt="" />
        <div className={"flex flex-col w-full h-32 p-4 overflow-hidden text-white"}>
          <h1 className={"h-auto text-2xl font-semibold"}>
            RollerCoaster Tycoon® 3: Complete Edition
            </h1>
        </div>
        <div className={"flex items-center justify-center w-full h-16 text-yellow-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>قیمت به دلار</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>56$</h1>
        </div>
        <div className={"flex items-center justify-center w-full h-16 text-blue-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>قیمت به تومان</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>1,400,000</h1>
        </div>
        <div className={"flex items-center justify-center w-full h-16 bg-green-500 border border-t-0 border-black text-dark-300 text-1xl"}>اطلاعات بازی</div>
      </div>
    </>
  )
}

export default Card
