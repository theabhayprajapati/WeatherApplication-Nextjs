import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import Leftpannel from '../components/Leftpannel'
import Sidebar from '../components/Sidebar'

function index() {
  return (
    <RecoilRoot>
      <div>
        <Head>
          <title>Currently Weather in Mumbai</title>
        </Head>
        <div className="bg-gray-100 p-5 font-monserat ">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-[30%] ">
              <Sidebar />
            </div>
            <div className="md:w-[70%]">{<Leftpannel />}</div>
          </div>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default index
