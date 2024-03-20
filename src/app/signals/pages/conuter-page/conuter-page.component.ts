import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './conuter-page.component.html',
  styleUrl: './conuter-page.component.css'
})
export class ConuterPageComponent {

  public counter = signal(10);
                              //? suquareCounter siempre va a estar al pendiente de las señales dentro de su funcion computaada de modo que
  public squareCounter= computed( () => this.counter() * this.counter() ); //? si es que estas cambian el tambien lo hara
                                               //? es de solo lectura


  increaseBy(value : number) {

this.counter.update( current => current + value)
  //? funcion de actualizacion, tiene el valor actual de la señal y lo que sea que regreses sera el valor actualizado
}

}
