import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encoder'
})
@Injectable({
  providedIn:'root'
})
export class EncoderPipe implements PipeTransform {

  transform(value: any, mode: 'encode' | 'decode' = 'decode'): any {
    if (!value) return null;

    try {
      if (mode === 'decode') {
        return JSON.parse(decodeURIComponent(value));
      } else if (mode === 'encode') {
        return encodeURIComponent(JSON.stringify(value));
      }
    } catch (e) {
      console.error(`Error during ${mode}:`, e);
      return null;
    }
  }

}
