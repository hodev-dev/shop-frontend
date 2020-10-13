import React from 'react';
import { FaPlaystation, FaSteamSymbol } from 'react-icons/fa';
import { IoMdCard } from 'react-icons/io';
import { Link } from 'react-router-dom';

const GiftPanel = () => {
  return (
    <>
      <div className={"flex items-center justify-center w-full h-20 bg-contain border border-black bg-dark-300"}>
        <Link to={"games"}>
          <div className={"flex items-center justify-center w-64 h-16 text-3xl font-semibold leading-none text-purple-900 bg-white rounded-md hover:bg-purple-900 hover:text-white"}>
            <FaSteamSymbol />
            <span className={"ml-4"}>Steam Game</span>
          </div>
        </Link>
        <Link to={"giftcards"}>
          <div className={"flex items-center justify-center w-64 h-16 ml-5 text-3xl font-semibold leading-none text-pink-900 bg-white rounded-md hover:bg-pink-900 hover:text-white"}>
            <IoMdCard />
            <span className={"ml-4"}>Gift Card</span>
          </div>
        </Link>
        <Link to={"giftcards"}>
          <div className={"flex items-center justify-center w-64 h-16 ml-5 text-3xl font-semibold leading-none text-blue-900 bg-white rounded-md hover:bg-blue-900 hover:text-white"}>
            <FaPlaystation />
            <span className={"ml-4"}>Playstation</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default GiftPanel
