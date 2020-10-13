import React from 'react';

const Paginator = (props: any) => {
  const { page, navigate } = props;

  return page.links.map((link: any, index: number) => {
    return (
      <div key={index} onClick={() => navigate(link.url)} className={`flex ${(link.active) ? `border-8 border-yellow-600` : ``} flex-row items-center cursor-pointer justify-center w-1/12 h-16 p-5 text-2xl text-white border border-black bg-dark-100 mt-2 mb-2`}>
        <h1 className={"w-fill"}>{link.label}</h1>
      </div>
    )
  });
}
export default Paginator;