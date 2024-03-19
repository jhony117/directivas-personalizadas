import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

 private htmlElement?: ElementRef<HTMLElement>;
 private _color:string = 'red';
 private _errors? : ValidationErrors | null ;

 @Input()  set color (value:string) {
  this._color= value;
  this.setStyle();
}

 @Input() set errors(value : ValidationErrors | null | undefined) {
  this._errors = value ;
  console.log(this._errors);
  this.setErrorMessage();
 }

  constructor(private el:ElementRef<HTMLElement>) {
    console.log(el);
    this.htmlElement = el ; 

  }
  ngOnInit(): void {
  console.log('directiva Oninit');
  this.setStyle();
  }

  setStyle():void{

    if(!this.htmlElement) return ;

    this.htmlElement!.nativeElement.style.color = this._color;
  }


  setErrorMessage(): void {
    if(!this.htmlElement) return ;
     if(!this._errors) {
        this.htmlElement.nativeElement.innerHTML = 'no Hay errores ';
        return;
     }
  
       //? nos da la lista de errores simplificada
  const errors =  Object.keys(this._errors);

  if(errors.includes('required')){
    this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido'
  }

  // if(errors.includes('minlength')){

  //   const min = this._errors!['minlegth']['requiredLength'];
  //   const current = this._errors!['minlegth']['actualLength'];
  //   this.htmlElement.nativeElement.innerHTML =`Minimo ${current}/${min} caracteres`;
  // }

  if(errors.includes('minlength') && errors.includes('email')){
    this.htmlElement.nativeElement.innerHTML = 'Es necesario colocar mas de 6 caracteres  |' + '   Tiene que colocar un email ';
    return;
  }
  // if(errors.includes('minlength')){
  //   this.htmlElement.nativeElement.innerHTML = 'Es necesario colocar mas de 6 caracteres'
  // }
  if(errors.includes('email')){
    this.htmlElement.nativeElement.innerHTML = 'Tiene que colocar un email'
  }
    }

}
