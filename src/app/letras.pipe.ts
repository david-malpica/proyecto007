import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args != null){
      if(args == 'ingles') {
        switch(value) {
          case 1: return 'one';
          case 2: return 'two';
          case 3: return 'three';
          case 4: return 'four';
          case 5: return 'five';
          case 6: return 'six';
          case 7: return 'seven';
          case 8: return 'eight';
          case 9: return 'nine';
          case 10: return 'ten';
        }
      }

      if(args == 'portugues') {
        switch(value) {
          case 1: return 'um';
          case 2: return 'dois';
          case 3: return 'tres';
          case 4: return 'quatro';
          case 5: return 'cinco';
          case 6: return 'seis';
          case 7: return 'sete';
          case 8: return 'oito';
          case 9: return 'nove';
          case 10: return 'dez';
        }
      }

      switch(value) {
        case 1: return 'uno';
        case 2: return 'dos';
        case 3: return 'tres';
        case 4: return 'cuatro';
        case 5: return 'cinco';
        case 6: return 'seis';
        case 7: return 'siete';
        case 8: return 'ocho';
        case 9: return 'nueve';
        case 10: return 'diez';
      }
    }
    return null;
  }

}
