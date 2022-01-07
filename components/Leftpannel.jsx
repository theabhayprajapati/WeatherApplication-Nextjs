import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { locationname, weatherdata } from './Store'

const Leftpannel = () => {
  const [aqifinder, setaqifinder] = useState('bg-white')
  const cityvalue = useRecoilValue(weatherdata)
  const useqai =
    typeof cityvalue.current === 'undefined'
      ? 'Null'
      : Math.round(cityvalue.current.air_quality.pm10)
  const whichcity = useRecoilValue(locationname)
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
  }, [cityvalue])
  // console.log(whichcity)
  return (
    <div className="p-2 md:px-8">
      <div className="text-xl font-medium">
        {/* //todo todays weatger highlist */}
        <div className="font-bold text-2xl mb-5">
          <h2>Todays Weather in {whichcity}</h2>
        </div>
        <div className="p-2 gap-5 flex md:flex-col lg:grid-cols-3 lg:grid justify-evenly  ">
          <div className="bone">
            UV Index
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.uv}
            </h3>
          </div>
          <div className="bone">
            Wind Status
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.wind_kph}
              km/h
            </h3>
            <h4 className="">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.wind_dir}
            </h4>
          </div>
          <div className="bone">
            Humidity
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.humidity}
            </h3>
          </div>
          <div className="bone">
            Visibility{' '}
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.vis_km}
            </h3>
          </div>

          <div className={`bone ${aqifinder}`}>
            Air Quality
            <h3 className="absolute top-[50%] text-center text-4xl text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : Math.round(cityvalue.current.air_quality.pm10)}
            </h3>
          </div>
          <div className="bone">
            Country
            <h3 className="absolute top-[50%] text-center text-4xl text-black grid  place-items-center">
              {typeof cityvalue.location === 'undefined'
                ? 'Null'
                : cityvalue.location.country}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftpannel
