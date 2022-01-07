import { SearchIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useState, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { locationname, weatherdata } from './Store'

const Sidebar = () => {
  const [getweather, setgetweather] = useRecoilState(weatherdata)
  const [cityvalue, setcityvalue] = useState('Delhi')
  const apiket = '6429569d006849fb94a134714220401'
  const unsplashkey = 'uFOc6WEV93YMHW4x92VgxuB03crQlU45fAA-TE5uW0I'
  function fetchweather() {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiket}&q=${cityvalue}&aqi=yes`,
    )
      .then((resp) => resp.json())
      .then((data) => setgetweather(data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchweather()
  }, [cityvalue])
  const [cityimage, setcityimage] = useState('')
  const fetchingimage = () => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${cityvalue}&client_id=${unsplashkey}`,
    )
      .then((resp) => resp.json())
      .then((data) => setcityimage(data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchingimage()
  }, [cityvalue])
  let randomvalue = Math.floor(Math.random() * 5)
  console.log(randomvalue)
  let arraynon = [2, 4, 5, 6, 7, 9]
  console.log(arraynon[Math.floor(Math.random() * arraynon.length)])
  console.log(
    typeof cityimage.results === 'undefined'
      ? console.log('')
      : cityimage.results[Math.floor(Math.random() * cityimage.results.length)]
          .urls.full,
  )

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setcityvalue(event.target.value) & console.log(event.target.value)
    }
  }
  return (
    <div className="px-2 md:p-5">
      <div className="flex space-x-3 justify-between ">
        {/* SEarch */}
        <div className="flex space-x-3 mb-5">
          <SearchIcon className="h-7 w-7 " />
          <input
            id="search"
            type="search"
            onKeyDown={handleKeyDown}
            placeholder="Search Places...."
            className="bg-transparent text-black text-xl pl-1  placeholder-black"
          />
        </div>
        <XIcon className="h-7 w-7" />
      </div>
      <div className="mb-5 rounded-3xl w-[100%] h-48 shadow-xl hover:scale-105 ease-out transition-all">
        <img
          src={
            typeof cityimage.results === 'undefined'
              ? console.log('prinintg ond oudf d')
              : cityimage.results[
                  Math.floor(Math.random() * cityimage.results.length)
                ].urls.full
          }
          className="object-cover rounded-3xl w-[100%] h-48"
          alt="https://images.unsplash.com/photo-1623356301071-6a39cc58a004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80"
        ></img>
      </div>

      {/* infomation */}

      <div className="mb-5">
        <h1 className="">
          <span className="text-7xl  ">
            {typeof getweather.current === 'undefined'
              ? 'Null'
              : getweather.current.temp_c}
            <span className="align-text-top text-5xl">&#xB0;C</span>
          </span>
        </h1>
      </div>
      <div className="mb-5">
        <h5 className="text-4xl">
          {/* {cityvalue}, {''} {''} */}
          <span>
            {''}
            {typeof getweather.location === 'undefined'
              ? 'Null'
              : getweather.location.localtime}
          </span>
        </h5>
      </div>

      <hr className="my-5" />

      <div className="text-2xl ">
        <div className="flex justify-start space-x-2 items-center">
          <img
            src={
              typeof getweather.current === 'undefined'
                ? 'Null'
                : getweather.current.condition.icon
            }
            alt=""
          />
          <h3 className="">
            {' '}
            {typeof getweather.current === 'undefined'
              ? 'Null'
              : getweather.current.condition.text}
          </h3>
        </div>
      </div>
      {/* location image */}
      <div className="bg-white hover:scale-105 ease-out transition-all shadow-xl rounded-3xl h-52 grid place-items-center text-3xl ">
        <h3 className="">
          {typeof getweather.location === 'undefined'
            ? 'Null'
            : getweather.location.name}
        </h3>
      </div>
    </div>
  )
}

export default Sidebar
