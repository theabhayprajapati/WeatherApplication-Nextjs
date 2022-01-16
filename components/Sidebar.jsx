import { LocationMarkerIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useState, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Geolocaiton from './Geolocaiton'
import { locationname, weatherdata, whichtemp } from './Store'

const Sidebar = ({ thememode, setthememode }) => {
  const [getweather, setgetweather] = useRecoilState(weatherdata)
  const [cityvalue, setcityvalue] = useState('Delhi')
  const [lat, setLat] = useState('19.40448620453243')
  const [lng, setLng] = useState('72.82411247833795')
  const [cityimage, setcityimage] = useState('')
  const [status, setStatus] = useState(null)
  let weathermeter = useRecoilValue(whichtemp)
  const apiket = '6429569d006849fb94a134714220401'
  const unsplashkey = 'uFOc6WEV93YMHW4x92VgxuB03crQlU45fAA-TE5uW0I'
  function fetchweather() {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiket}&q=${cityvalue}&aqi=yes`,
    )
      .then((resp) => resp.json())
      .then((data) => setgetweather(data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchweather()
  }, [cityvalue])
  const fetchingimage = () => {
    fetch(
      `https://api.unsplash.com/search/photos?query=delhi&client_id=uFOc6WEV93YMHW4x92VgxuB03crQlU45fAA-TE5uW0I`,
    )
      .then((resp) => resp.json())
      .then((data) => setcityimage(data))
      .then(setcityimage(cityimage))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchingimage()
  }, [cityvalue])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setcityvalue(event.target.value)
    }
  }

  //todo: fn for finding the lat's and longs
  function runlatlng() {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser')
    } else {
      setStatus('Locating...')
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null)
          setLat(position.coords.latitude)
          setLng(position.coords.longitude)
        },
        () => {
          setStatus('Unable to retrieve your location')
        },
      )
    }

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiket}&q=${lat},${lng}&aqi=yes`,
    )
      .then((resp) => resp.json())
      .then((data) => setgetweather(data))
      .catch((err) => console.log(err))
  }
  console.log(lat)
  console.log(lng)
  console.log(status)

  return (
    <div className="px-2 md:p-5">
      <div className="flex space-x-3 justify-between ">
        {/* SEarch */}
        <div
          className={
            thememode
              ? 'flex space-x-3 mb-3 bg-gray-300 rounded-lg items-center drop-shadow-lg w-[100%] shado'
              : 'flex space-x-3 mb-3 bg-gray-500 rounded-lg items-center drop-shadow-lg w-[100%] shado'
          }
        >
          <SearchIcon className="h-7 w-7 ml-1" />
          <input
            id="search"
            type="search"
            onKeyDown={handleKeyDown}
            placeholder="Search Places...."
            className={
              thememode
                ? 'text-black text-xl pl-1 h-10 w-[100%] bg-transparent'
                : 'text-white text-xl pl-1 h-10 w-[100%] bg-transparent'
            }
          />
          {console.log(thememode)}
          {/* <XIcon  className="h-7 w-7" /> */}
        </div>
      </div>
      <div>
        <button
          onClick={runlatlng}
          className="bg-green-400 rounded-full items-center mb-2 drop-shadow-md flex px-3 py-[0.5px]"
        >
          <LocationMarkerIcon className="h-4 w-4" />
          current location
        </button>
      </div>
      <div className="mb-5  rounded-3xl w-[100%] h-48 shadow-xl grid place-items-center hover:scale-105 ease-out transition-all drop-shadow-lg">
        <img
          src={
            typeof cityimage.results === 'undefined'
              ? console.log('prinintg ond oudf d')
              : cityimage.results[
                  Math.floor(Math.random() * cityimage.results.length)
                ].urls.full
          }
          className="object-cover rounded-3xl w-[100%] h-48"
          alt="loading"
        />
        {/* <div className="z-40 top-[50%] left-{]">Pune</div> */}
      </div>

      {/* infomation */}

      <div className="mb-5 drop-shadow-lg">
        <h1 className="">
          <span className="text-7xl  ">
            {typeof getweather.current === 'undefined'
              ? 'loading...'
              : weathermeter
              ? getweather.current.temp_c
              : getweather.current.temp_f}
            {weathermeter ? (
              <span className="align-text-top text-5xl">&#xB0;C</span>
            ) : (
              <span className="align-text-top text-5xl">&#xB0;F</span>
            )}
            <span className="text-2xl font-semibold">
              {typeof getweather.location === 'undefined'
                ? 'loading...'
                : getweather.location.name}
            </span>
          </span>
        </h1>
      </div>
      <div className="mb-5 drop-shadow-lg">
        <h5 className="text-4xl">
          {/* {cityvalue}, {''} {''} */}
          <span>
            {''}
            {typeof getweather.location === 'undefined'
              ? 'loading...'
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
                ? 'loading...'
                : getweather.current.condition.icon
            }
            alt=""
          />
          <h3 className="drop-shadow-lg">
            {' '}
            {typeof getweather.current === 'undefined'
              ? 'loading...'
              : getweather.current.condition.text}
          </h3>
        </div>
      </div>
      {/* location image */}
      <div
        className={
          thememode
            ? 'bg-white hover:scale-105 ease-out transition-all shadow-xl rounded-3xl h-52 grid place-items-center text-3xl drop-shadow-lg   '
            : 'bg-gray-700 hover:scale-105 ease-out transition-all shadow-xl rounded-3xl h-52 grid place-items-center text-3xl  '
        }
      >
        <h3 className="">
          {typeof getweather.location === 'undefined'
            ? 'loading...'
            : getweather.location.region}
        </h3>
      </div>
    </div>
  )
}

export default Sidebar
