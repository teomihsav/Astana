import { useVoiceToText } from "react-speakup";
import { state, useStore, } from "../../../helpers/cardsData";
import { useEffect } from "react";

const VoiceToText = () => {
  const { startListening, stopListening, transcript, reset } = useVoiceToText();
  const { setTranscript } = useStore()

  // console.log(transcript.slice(0, -1))

  useEffect(() => {
    reset()
    // state.transcript = transcript.slice(0, -1).trim()
    return () => {
      setTimeout(() => {
        setTranscript(transcript.slice(0, -1).trim())
      }, 500)
    }
  }, [transcript])

  return (
    <div>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={stopListening}>Stop Listening</button>
      <button onClick={reset}>Reset Transcript</button>
      <span>{state.transcript}</span>
    </div>
  );
};

export default VoiceToText;