import React from 'react';

const RenderGamePrice = (props: any) => {
  const { prices } = props;

  if (prices && prices.length > 0) {
    return prices.map((price: any) => {
      return (
        <div dir={'rtl'} className={""}>
          <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'ریجن'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{price.currency.name}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'قیمت'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{price.price / 100}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'تخفیف'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{price.discount_percent}</h1>
          </div>
          <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
            <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'قیمت نهایی'}</h1>
            <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{String(price.final_price / 100 * price.currency.rate).replace(/(.)(?=(\d{3})+$)/g, '$1,') + ' ' + 'تومان'}</h1>
          </div>
        </div>
      )
    });
  } else {
    return (
      <div dir={'rtl'} className={"h-screen"}>
        <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'region'}</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
        </div>
        <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'price'}</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
        </div>
        <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'discount'}</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
        </div>
        <div className={"flex items-center justify-center w-full h-20 text-gray-200 border text-1xl border-dark-300"}>
          <h1 className={"flex items-center justify-center w-1/2 h-auto"}>{'final_price'}</h1>
          <h1 className={"flex items-start justify-center w-1/2 h-auto"}>{'-'}</h1>
        </div>
      </div>
    )
  }
}

export default RenderGamePrice
