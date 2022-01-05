import Head from 'next/head'
import Leftpannel from '../components/Leftpannel'
import Sidebar from '../components/Sidebar'

function index() {
  return (
    <div>
      <Head>
        <title>Currently Weather in Mumbai</title>
      </Head>
      <div className="bg-gray-100 p-5 font-monserat ">
        <div className=" flex flex-col lg:flex-row ">
          <div className="md:w-[30%] ">
            <Sidebar />
          </div>
          <div className="md:w-[70%]">
            <Leftpannel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
