import { AxiosError, AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Sidebar from '../../../components/admin/Sidebar'
import Collections from '../../../components/Collection'
import Header from '../../../components/Header'
import SWITCH, { CASE, DEFAULT } from '../../../components/Logics/Switch'
import Spinner from '../../../components/Spinner'
import { Axios } from '../../../helper/axios_config'
import { IauthReducer } from '../../../reducers/authReducer'
import { IApplicationState } from '../../../reducers/rootReducer'

enum collectionsStatusType {
  LOADING,
  SUCCESS,
  FAILED
}

const AdminCollections = () => {
  const { user } = useSelector((store: IApplicationState): IauthReducer => store.authReducer);
  const [collectionInput, setCollectionInput] = useState('');
  const [gameIDInput, setGameIDInput] = useState('');
  const [collections, setCollections] = useState([]);
  const [collectionsStatus, setCollectionsStatus] = useState(collectionsStatusType.LOADING);
  const [select, setSelect] = useState('');

  useEffect(() => {
    request_collections();
  }, [])

  useEffect(() => {
    console.log({ collections });
  }, [collections])

  const handleCollectionInput = (event: React.FormEvent<HTMLInputElement>) => {
    setCollectionInput(event.currentTarget.value)
  }
  const handleGameIDInput = (event: React.FormEvent<HTMLInputElement>) => {
    setGameIDInput(event.currentTarget.value)
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.currentTarget.value);
  }

  const request_collections = () => {
    const request = Axios.get('/api/collections');
    request.then((response: AxiosResponse) => {
      setCollections(response.data);
      setSelect(response.data[0].name);
      setCollectionsStatus(collectionsStatusType.SUCCESS);
    }).catch(() => {
      setCollectionsStatus(collectionsStatusType.FAILED);
      toast.error('something wrong!');
    });
  }

  const add_collections = () => {
    const request = Axios.post('/api/collections', { name: collectionInput });
    request.then((result: AxiosResponse) => {
      request_collections();
      toast.success('done')
    }).catch((err: AxiosError) => {
      toast.success('error')
    });
  }

  const add_game_to_collection = () => {
    const request = Axios.post('/api/collection_game', { steamID: gameIDInput, collection_name: select });
    request.then((result: AxiosResponse) => {
      request_collections();
      toast.success('added');
    }).catch((err: AxiosError) => {
      toast.error('error')
    });
  }

  const renderCollectionOptions = () => {
    return collections.map((collection: any, index: number) => {
      return (
        <option key={index} className={"text-3xl text-white"}>{collection.name}</option>
      )
    });
  }

  return (
    <div className={'h-screen bg-dark-200'}>
      <Header />
      <div className={"flex h-auto"}>
        <div className={"flex w-10/12 h-auto bg-dark-200"}>
          <div className={"flex flex-col w-10/12 h-auto p-2 mx-auto"}>
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Add Collection</h1>
            <div key={1} className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg just bg-dark-100"}>
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >SteamID</h1>
              <input onChange={handleCollectionInput} placeholder={"enter collection name"} className={"w-9/12 h-12 text-2xl text-center text-white outline-none bg-dark-200"} type="text" />
              <button onClick={add_collections} className={"w-2/12 h-12 ml-5 text-center text-green-200 outline-none bg-dark-200"}>Make new Collection</button>
            </div>
            <h1 className={"w-full h-16 text-4xl text-gray-500"}>Add Game To Collection</h1>
            <div key={2} className={"flex flex-row items-center w-full h-16 p-2 text-gray-500 border border-black rounded-lg just bg-dark-100"}>
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >SteamID</h1>
              <input onChange={handleGameIDInput} placeholder={"enter collection name"} className={"w-4/12 h-12 text-2xl text-center text-white outline-none bg-dark-200"} type="text" />
              <h1 className={"flex items-center justify-center w-1/12 h-12"} >Collection</h1>
              <select onChange={handleSelectChange} className={"w-4/12 h-12 p-2 text-2xl text-center text-white outline-none bg-dark-200"} name="cars" id="cars">
                <SWITCH variable={collectionsStatus}>
                  <CASE check={collectionsStatusType.SUCCESS}>
                    {renderCollectionOptions()}
                  </CASE>
                  <CASE check={collectionsStatusType.FAILED}>
                    <option className={"text-3xl text-white"}>failed</option>
                  </CASE>
                  <DEFAULT>
                    <option className={"text-3xl text-white"}>Loading</option>
                  </DEFAULT>
                </SWITCH>
              </select>
              <button onClick={add_game_to_collection} className={"w-3/12 h-12 ml-5 text-center text-green-200 outline-none bg-dark-200"}>Add Game To Collection</button>
            </div>
          </div>
        </div>
        <Sidebar user={user} />
      </div>
      <SWITCH variable={collectionsStatus}>
        <CASE check={collectionsStatusType.SUCCESS}>
          <Collections collections={collections} />
        </CASE>
        <CASE check={collectionsStatusType.FAILED}>
          <option className={"text-3xl text-white"}>failed</option>
        </CASE>
        <DEFAULT>
          <Spinner />
        </DEFAULT>
      </SWITCH>
    </div>
  )
}

export default AdminCollections
