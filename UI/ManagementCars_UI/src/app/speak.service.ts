import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpeakService {

  constructor(private speechSynthesis:SpeechSynthesis) {

  if ('speechSynthesis' in window) {
    speechSynthesis = window.speechSynthesis;
  } else {
    console.log('Text-to-speech not supported.');
  }
   }
}
