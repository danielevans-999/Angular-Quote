import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighestvote]'
})
export class HighestvoteDirective {

  constructor(private elem:ElementRef) {


   }
   

}
