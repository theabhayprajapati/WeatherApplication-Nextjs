import Head from 'next/head'
import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import Leftpannel from '../components/Leftpannel'
import Sidebar from '../components/Sidebar'

function index() {
  const [thememode, setthememode] = useState(true)
  return (
    <RecoilRoot>
      <div>
        <Head>
          <title>Currently Weather in Mumbai</title>
        </Head>
        <div
          className={
            !thememode
              ? 'bg-gray-900 p-5 font-monserat text-white'
              : 'bg-gray-100 p-5 font-monserat text-black'
          }
        >
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-[30%] ">
              <Sidebar thememode={thememode} setthememode={setthememode} />
            </div>
            <div className="md:w-[70%]">
              <Leftpannel thememode={thememode} setthememode={setthememode} />
            </div>
          </div>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default index
