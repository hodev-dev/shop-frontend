import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../../components/admin/Sidebar'
import Header from '../../../components/Header'
import SWITCH, { CASE, DEFAULT } from '../../../components/Logics/Switch'
import Spinner from '../../../components/Spinner'
import { IauthReducer } from '../../../reducers/authReducer'
import { IApplicationState } from '../../../reducers/rootReducer'

const AdminCollections = () => {
  const { user } = useSelector((store: IApplicationState): IauthReducer => store.authReducer);

  return (
    <>
      <Header />
      <div className={"flex h-screen"}>
        <div className={"flex w-10/12 h-auto bg-dark-200"}>
          <div className={"flex flex-col w-10/12 h-auto p-2 mx-auto"}>
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Add Collection</h1>
            <div key={1} className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg just bg-dark-100"}>
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >SteamID</h1>
              <input placeholder={"enter collection name"} className={"w-9/12 h-12 text-2xl text-center text-white outline-none bg-dark-200"} type="text" />
              <button className={"w-2/12 h-12 ml-5 text-center text-green-200 outline-none bg-dark-200"}>Make new Collection</button>
            </div>
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Add Game To Collection</h1>
            <div key={1} className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg just bg-dark-100"}>
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >SteamID</h1>
              <input placeholder={"enter collection name"} className={"w-4/12 h-12 text-2xl text-center text-white outline-none bg-dark-200"} type="text" />
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >Collection</h1>
              <input placeholder={"enter collection name"} className={"w-4/12 h-12 text-2xl text-center text-white outline-none bg-dark-200"} type="text" />
              <button className={"w-3/12 h-12 ml-5 text-center text-green-200 outline-none bg-dark-200"}>Add Game To Collection</button>
            </div>
            <SWITCH variable={true}>
              <CASE check={true}>
                admin collection
              </CASE>
              <CASE check={false}>
                <h1 className={"text-3xl text-white"}>failed</h1>
              </CASE>
              <DEFAULT>
                <Spinner />
              </DEFAULT>
            </SWITCH>
          </div>
        </div>
        <Sidebar user={user} />
      </div>
    </>
  )
}

export default AdminCollections
