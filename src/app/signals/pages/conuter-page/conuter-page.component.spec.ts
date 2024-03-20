import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConuterPageComponent } from './conuter-page.component';

describe('ConuterPageComponent', () => {
  let component: ConuterPageComponent;
  let fixture: ComponentFixture<ConuterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConuterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConuterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
