import { useEffect, useState } from 'react'
import { cityname } from './Sidebar.jsx'
const Leftpannel = () => {
  cityname
  const [getsearchedlp, setgetsearchedlplp] = useState({})
  useEffect(() => {
    fetch(
      'http://api.weatherapi.com/v1/current.json?key=6429569d006849fb94a134714220401&q=mumbai&aqi=yes',
    )
      .then((resp) => resp.json())
      .then((data) => setgetsearchedlplp(data))
      .catch((err) => console.log(err))
  }, [])
  console.log(getsearchedlp)
  const [aqifinder, setaqifinder] = useState('bg-white')

  const useqai =
    typeof getsearchedlp.current === 'undefined'
      ? 'Null'
      : Math.round(getsearchedlp.current.air_quality.pm10)

  console.log(useqai)

  const checkcolor = () => {
    if ((useqai > 0) & (useqai < 50)) {
      setaqifinder('bg-green-400')
    } else if ((useqai > 51) & (useqai < 100)) {
      setaqifinder('bg-yellow-400')
    } else if ((useqai > 101) & (useqai < 150)) {
      setaqifinder('bg-orange-400')
    } else if ((useqai > 151) & (useqai < 200)) {
      setaqifinder('bg-red-400')
    } else if ((useqai > 201) & (useqai < 300)) {
      setaqifinder('bg-purple-400')
    } else if (useqai > 300) {
      setaqifinder('bg-red-900')
    }
  }
  useEffect(() => {
    checkcolor()
  }, [])
  // let apiin = `{typeof getsearchedlp.current === 'undefined'? 'Null': Math.round(getsearchedlp.current.air_quality.pm10)}`

  // console.log(apiin)
  function changeaqi() {}
  return (
    <div className="md:px-8">
      <div className="text-xl font-medium">
        {/* //todo todays weatger highlist */}
        <div className="font-bold text-2xl mb-5">
          <h2>Todays Weather in Mumbai</h2>
        </div>
        <div className="md:grid md:grid-rows-2 md:grid-cols-3 md:gap-10 flex overflow-x-scroll ">
          <div className="bone">
            UV Index
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof getsearchedlp.current === 'undefined'
                ? 'Null'
                : getsearchedlp.current.uv}
            </h3>
          </div>
          <div className="bone">
            Wind Status
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof getsearchedlp.current === 'undefined'
                ? 'Null'
                : getsearchedlp.current.wind_kph}
              km/h
            </h3>
            <h4 className="">
              {typeof getsearchedlp.current === 'undefined'
                ? 'Null'
                : getsearchedlp.current.wind_dir}
            </h4>
          </div>
          <div className="bone">
            Humidity
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof getsearchedlp.current === 'undefined'
                ? 'Null'
                : getsearchedlp.current.humidity}
            </h3>
          </div>
          <div className="bone">
            Visibility{' '}
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof getsearchedlp.current === 'undefined'
                ? 'Null'
                : getsearchedlp.current.vis_km}
            </h3>
          </div>

          <div className={`bone ${aqifinder}`}>
            Air Quality
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof getsearchedlp.current === 'undefined'
                ? 'Null'
                : Math.round(getsearchedlp.current.air_quality.pm10)}
            </h3>
          </div>
          <div className="bone">
            Country
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof getsearchedlp.location === 'undefined'
                ? 'Null'
                : getsearchedlp.location.country}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftpannel
