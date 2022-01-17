import { LocationMarkerIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { weatherdata, whichtemp } from './Store'

const Leftpannel = ({ thememode, setthememode }) => {
  const [measuretemp, setmeasuretemp] = useRecoilState(whichtemp)
  const [aqifinder, setaqifinder] = useState('white')
  const cityvalue = useRecoilValue(weatherdata)
  const changetheme = () => {
    return setthememode(!thememode)
  }
  const useqai =
    typeof cityvalue.current === 'undefined'
      ? 'loading...'
      : Math.round(cityvalue.current.air_quality.pm2_5)

  const [setemoji, setsetemoji] = useState()

  const checkcolor = () => {
    if ((useqai > 0) & (useqai < 30)) {
      setsetemoji('😂')
      setaqifinder('bg-green-500')
    } else if ((useqai > 31) & (useqai < 60)) {
      setsetemoji('😊')
      setaqifinder('bg-green-400')
    } else if ((useqai > 61) & (useqai < 90)) {
      setsetemoji('🥺')
      setaqifinder('bg-yellow-400')
    } else if ((useqai > 91) & (useqai < 120)) {
      setsetemoji('😲')
      setaqifinder('bg-red-500')
    } else if ((useqai > 121) & (useqai < 250)) {
      setsetemoji('🤢')
      setaqifinder('bg-red-700')
    } else if (useqai > 250) {
      setsetemoji('😷')
      setaqifinder('bg-red-900')
    }
  }
  useEffect(() => {
    checkcolor()
  }, [cityvalue])
  function changemeaure() {
    setmeasuretemp(!measuretemp)
  }

  return (
    <div className="p-2 md:px-8">
      <div className="text-xl font-medium bgre">
        {/* //todo todays weatger highlist */}
        <div className="font-bold text-2xl mb-5 flex justify-between">
          <h2>
            Todays Weather in{' '}
            {typeof cityvalue.location === 'undefined'
              ? 'loading...'
              : cityvalue.location.name}{' '}
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={changemeaure}
              className={
                measuretemp
                  ? 'text-lg bg-blue-600 px-3 py-1 rounded-lg text-white shadow-lg'
                  : 'text-lg bg-red-500 px-3 py-1 rounded-lg text-white shadow-lg'
              }
            >
              {measuretemp ? 'Get in Feh' : 'Get in Cel.'}
            </button>
          </div>
        </div>
        <button
          className="bg-black text-white px-3 rounded-lg"
          onClick={(e) => {
            e.preventDefault()
            setthememode(!thememode)
          }}
        >
          {thememode ? 'turn 🏮 lights' : 'turn 💡 lights'}
        </button>
        <div className="p-2 gap-5 flex flex-col items-center md:flex-row md:justify-around md:flex-wrap lg:grid-cols-3 text-black w-[100%] ">
          <div className={thememode ? 'bone' : 'bonedark'}>
            UV Index
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'loading...'
                : cityvalue.current.uv}
            </h3>
          </div>

          <div
            className={
              thememode
                ? `bone ${aqifinder} text-white `
                : `bonedark text-white ${aqifinder}`
            }
          >
            Air Quality
            <div className="flex flex-col">
              <h3 className="bonetext flex">
                {typeof cityvalue.current === 'undefined'
                  ? 'loading...'
                  : Math.round(cityvalue.current.air_quality.pm2_5)}
                {setemoji}
                <span className="text-sm text-white">pm25</span>
              </h3>
            </div>
          </div>

          <div className={thememode ? 'bone' : 'bonedark'}>
            Wind Status
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'loading...'
                : cityvalue.current.wind_kph}
              km/h
            </h3>
            <h4 className="flex mt-2 text-black">
              <LocationMarkerIcon className="h-8 w-8 rotate-45" />
              {typeof cityvalue.current === 'undefined'
                ? 'loading...'
                : cityvalue.current.wind_dir}
            </h4>
          </div>
          <div className={thememode ? 'bone' : 'bonedark'}>
            Humidity
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'loading...'
                : cityvalue.current.humidity}
            </h3>
          </div>
          <div className={thememode ? 'bone' : 'bonedark'}>
            Visibility{' '}
            <h3 className="bonetext ">
              {typeof cityvalue.current === 'undefined'
                ? 'loading...'
                : cityvalue.current.vis_km}
              {''} Km
            </h3>
          </div>

          <div className={thememode ? `bone` : 'bonedark'}>
            Country
            <h3 className="bonetext ">
              {typeof cityvalue.location === 'undefined'
                ? 'loading...'
                : cityvalue.location.country}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftpannel
