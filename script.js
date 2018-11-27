/*The SpeechSynthesis interface of the Web Speech API is the controller interface 
for the speech service; this can be used to retrieve information about the synthesis 
voices available on the device, start and pause speech, and other commands besides.*/

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name = "text"]').value;

/*The getVoices() method of the SpeechSynthesis interface returns a list of 
SpeechSynthesisVoice objects representing all the available voices on the current device.*/
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
  //.filter(voice => voice.lang.includes('en'))
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
  .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

/*The cancel() method of the SpeechSynthesis interface removes all utterances from 
the utterance queue.*/
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if(startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);


options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));