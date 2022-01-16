import Head from 'next/head'
import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import Geolcoation from '../components/Geolocaiton'
import Leftpannel from '../components/Leftpannel'
import Sidebar from '../components/Sidebar'
import Makeobj from '../Makeobj'

function index() {
  const [thememode, setthememode] = useState(true)
  return (
    <RecoilRoot>
      <div className=" ">
        <Head>
          <title>Currently Weather</title>
        </Head>
        <div
          className={
            !thememode
              ? 'bg-gray-900 h-full p-5 font-monserat text-white'
              : 'bg-gray-100 h-full p-5 font-monserat text-black'
          }
        >
          <div className="flex flex-col md:flex-row border ">
            <div className="md:w-[30%] border ">
              <Sidebar thememode={thememode} setthememode={setthememode} />
            </div>
            <div className="md:w-[70%]">
              <Leftpannel thememode={thememode} setthememode={setthememode} />
              <Geolcoation />
              {/* <Makeobj /> */}
            </div>
          </div>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default index
