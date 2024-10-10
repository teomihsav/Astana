import { useTextToVoice } from "react-speakup";
import playImg from '../../../assets/svg/play.svg'
import pauseImg from '../../../assets/svg/pause.svg'
import resumeImg from '../../../assets/svg/resume.svg'


const VoiceToVoice = (props: { text: string }) => {
  const { speak, pause, resume, ref, setVoice, voices } = useTextToVoice<HTMLDivElement>();
  setVoice(voices[107])

  return (
    <div ref={ref} className="pprCont">
      <img className="imgPPR" src={playImg} onClick={speak} />
      <img className="imgPPR" src={pauseImg} onClick={pause} />
      <img className="imgPPR" src={resumeImg} onClick={resume} />
      <p style={{ display: 'none' }}>{props.text}</p>
    </div>
  );
};

export default VoiceToVoice;