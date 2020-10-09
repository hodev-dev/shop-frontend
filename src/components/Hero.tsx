import React from 'react'

const Hero = () => {
  return (
    <>
      <div className={"flex w-full bg-contain h-sixty bg-dark-300"}>
        <img className={"object-cover object-top w-full h-auto"} src={require('../assets/img/fall.jpg')} alt="controll" />
      </div>
    </>
  )
}

export default Hero
