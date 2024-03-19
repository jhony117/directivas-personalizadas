import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './products-pages.component.html',
  styleUrl: './products-pages.component.css'
})
export class ProductsPagesComponent {


  private fb = inject(FormBuilder);

  public color :string = 'green'

  public myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })

  // constructor(private fb:FormBuilder) {}

  changeColor()  {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
   
  }

}
