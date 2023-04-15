const synth = window.speechSynthesis;
const defaultVoice = synth
  .getVoices()
  .find((voice) =>
    voice.voiceURI === "Microsoft Daniel - Portuguese (Brazil)" ||
    voice.voiceURI === "Google português do Brasil"
      ? voice
      : null
  );

const speak = (utterThis: SpeechSynthesisUtterance) => {
  if (defaultVoice != null) utterThis.voice = defaultVoice;
  synth.speak(utterThis);
};
export { speak };
