import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { weatherdata } from './Store'

const Leftpannel = () => {
  const [aqifinder, setaqifinder] = useState('bg-white')
  const cityvalue = useRecoilValue(weatherdata)
  const useqai =
    typeof cityvalue.current === 'undefined'
      ? 'Null'
      : Math.round(cityvalue.current.air_quality.pm10)
  console.log(useqai)
  const checkcolor = () => {
    if ((useqai > 0) & (useqai < 50)) {
      setaqifinder('green-400')
    } else if ((useqai > 51) & (useqai < 100)) {
      setaqifinder('yellow-400')
    } else if ((useqai > 101) & (useqai < 150)) {
      setaqifinder('orange-400')
    } else if ((useqai > 151) & (useqai < 200)) {
      setaqifinder('red-400')
    } else if ((useqai > 201) & (useqai < 300)) {
      setaqifinder('purple-400')
    } else if (useqai > 300) {
      setaqifinder('red-900')
    }
  }
  useEffect(() => {
    checkcolor()
  }, [cityvalue])
  return (
    <div className="p-2 md:px-8 ">
      <div className="text-xl font-medium">
        {/* //todo todays weatger highlist */}
        <div className="font-bold text-2xl mb-5">
          <h2>
            Todays Weather in{' '}
            {typeof cityvalue.location === 'undefined'
              ? 'Null'
              : cityvalue.location.name}{' '}
          </h2>
        </div>
        <div className="p-2 gap-5 flex  flex-col items-center md:flex-row md:justify-around md:flex-wrap lg:grid-cols-3  ">
          <div className="bone">
            UV Index
            <h3 className="bonetext text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.uv}
            </h3>
          </div>
          <div className="bone">
            Wind Status
            <h3 className="bonetext text-black">
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
            <h3 className="bonetext text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.humidity}
            </h3>
          </div>
          <div className="bone">
            Visibility{' '}
            <h3 className="bonetext text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.vis_km}
            </h3>
          </div>

          <div className={`bone bg-${aqifinder}`}>
            Air Quality
            <h3 className="bonetext text-black">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : Math.round(cityvalue.current.air_quality.pm10)}
            </h3>
          </div>
          <div className="bone">
            Country
            <h3 className="bonetext text-black">
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
