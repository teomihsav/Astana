import { useVoiceToText } from "react-speakup";
import { state } from "../../../helpers/cardsData";

const VoiceToText = () => {
  const { startListening, stopListening, transcript, reset } = useVoiceToText();

  console.log(transcript.slice(0, -1))
  state.transcript = transcript.slice(0, -1).trim()

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