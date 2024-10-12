import { useVoiceToText } from "react-speakup";
// import { state, useStore, } from "../../../helpers/cardsData";
import { useEffect, useRef, useState } from "react";
import powerImg from '../../../assets/svg/power.svg'
import stopImg from '../../../assets/svg/stop.svg'
import mic from '../../../assets/svg/mic.svg'
import micOff from '../../../assets/svg/micOff.svg'
import { scrollToSmoothly } from "../../../helpers/helpers";
// import Power from "../svg/Power";

const VoiceToText = () => {
  const { startListening, stopListening, transcript, reset } = useVoiceToText();
  const [tool, toolSet] = useState<string>('')
  const [onOff, onOffSet] = useState<boolean>()
  // const { setTranscript } = useStore()
  const winHeight = useRef(window.innerHeight)

  useEffect(() => {
    reset()
    return () => {
      toolSet(transcript.slice(0, -1).trim())
      setTimeout(() => {
        transcript.slice(0, -1).trim() === 'Stop Mic' && stopListening(), onOffSet(false)
        const element = document.getElementById(transcript.slice(0, -1).trim())

        transcript.slice(0, -1).trim() === 'Stop Mic'
          ?
          scrollToSmoothly(0, 900)
          :
          scrollToSmoothly(Number(element?.offsetTop) - (winHeight.current / 2) + Number(element?.offsetHeight as number / 2), 900)
      }, 100)
    }
  }, [transcript])

  const toolTip = (text: string) => {
    toolSet(text)
  }

  return <>
    <div className="voiceToTextCont">
      {onOff ?
        <img
          className='mic'
          src={mic}
        />
        :
        <img
          className='mic'
          src={micOff}
        />
      }  <img
        onMouseOver={() => toolTip('Start Voice Menu Navigation')}
        onMouseOut={() => toolTip('')}
        className="imgPower"
        src={powerImg}
        onClick={() => (startListening(), onOffSet(true))}
      />
      <img
        onMouseOver={() => toolTip('Stop Mic')}
        onMouseOut={() => toolTip('')}
        className="imgStop"
        src={stopImg}
        onClick={() => (stopListening(), onOffSet(false))}
      />
      {/* <button onClick={reset}>Reset Transcript</button> */}

      <span className="textVoice">{tool}</span>
    </div>
  </>
}

export default VoiceToText;