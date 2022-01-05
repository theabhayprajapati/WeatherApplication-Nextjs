import { SearchIcon, XIcon } from '@heroicons/react/outline'
import { data } from 'autoprefixer'
import { useEffect, useState, useRef } from 'react'
// import Grid from '@mui/material/Grid'
const Sidebar = () => {
  const [searchcity, setsearchcity] = useState('Mumbai')
  const inputRef = useRef()
  const [getsearched, setgetsearched] = useState({})
  const getdata = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=6429569d006849fb94a134714220401&q=${searchcity}&aqi=yes`,
    )
      .then((resp) => resp.json())
      .then((data) => setgetsearched(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getdata()
  }, [])
  const clearinput = () => {
    setsearchcity('')
  }
 

  return (
    <div className="px-5">
      <div className="flex  space-x-3 justify-between ">
        {/* SEarch */}
        <div className="flex space-x-3 mb-5">
          <SearchIcon className="h-7 w-7 " />
          <input
            type="search"
            ref={inputRef}
            onChange={(e) => {
              setsearchcity(e.target.value)
            }}
            value={searchcity}
            onKeyPress={getdata}
            placeholder="Search Places...."
            className="bg-transparent text-black text-xl placeholder-black"
          />
        </div>
        <XIcon className="h-7 w-7" onClick={clearinput} />
      </div>
      <div className="bg-yellow-300  mb-5 rounded-3xl w-[100%] h-48 shadow-xl"></div>

      {/* infomation */}

      <div className="mb-5">
        <h1 className="">
          <span className="text-7xl  ">
            {typeof getsearched.current === 'undefined'
              ? 'Null'
              : getsearched.current.temp_c}
            <span className="align-text-top text-5xl">&#xB0;C</span>
          </span>
        </h1>
      </div>
      <div className="mb-5">
        <h5 className="text-4xl">
          Monday, {''} {''}
          <span>
            {''}
            {typeof getsearched.location === 'undefined'
              ? 'Null'
              : getsearched.location.localtime}
          </span>
        </h5>
      </div>

      <hr className="my-5" />

      <div className="text-2xl ">
        <div className="flex justify-start space-x-2 items-center">
          <img
            src={
              typeof getsearched.current === 'undefined'
                ? 'Null'
                : getsearched.current.condition.icon
            }
            alt=""
          />
          <h3 className="">
            {' '}
            {typeof getsearched.current === 'undefined'
              ? 'Null'
              : getsearched.current.condition.text}
          </h3>
        </div>
      </div>
      {/* location image */}
      <div className="bg-white   shadow-xl rounded-3xl h-52 relative ">
        <h3 className="absolute to  44%] text-4xl left-[27%]"></h3>
      </div>
    </div>
  )
}

export default Sidebar
