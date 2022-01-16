import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { weatherdata } from './Store'

const Leftpannel = ({ thememode, setthememode }) => {
  const [aqifinder, setaqifinder] = useState('white')
  const cityvalue = useRecoilValue(weatherdata)
  const changetheme = () => {
    return setthememode(!thememode)
  }
  let durrentcolor = 'bg-green-500'

  const useqai =
    typeof cityvalue.current === 'undefined'
      ? 'Null'
      : Math.round(cityvalue.current.air_quality.pm10)

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
      setaqifinder('bg-red-500')
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
          <button
            onClick={(e) => {
              e.preventDefault()
              setthememode(!thememode)
            }}
          >
            {thememode ? 'turn off lights' : 'turn on lights'}
          </button>
        </div>
        <div className="p-2 gap-5 flex  flex-col items-center md:flex-row md:justify-around md:flex-wrap lg:grid-cols-3 text-black w-[100%] ">
          <div className={thememode ? 'bone' : 'bonedark'}>
            UV Index
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.uv}
            </h3>
          </div>
          <div
            className={
              thememode
                ? `bone ${aqifinder}`
                : `bonedark  ${aqifinder}`
            }
          >
            Air Quality
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'lading'
                : Math.round(cityvalue.current.air_quality.pm10)}
            </h3>
          </div>
          <div className={thememode ? 'bone' : 'bonedark'}>
            Wind Status
            <h3 className="bonetext ">
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
          <div className={thememode ? 'bone' : 'bonedark'}>
            Humidity
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.humidity}
            </h3>
          </div>
          <div className={thememode ? 'bone' : 'bonedark'}>
            Visibility{' '}
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'Null'
                : cityvalue.current.vis_km}
            </h3>
          </div>

          <div className={thememode ? `bone` : 'bonedark'}>
            Country
            <h3 className="bonetext ">
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
