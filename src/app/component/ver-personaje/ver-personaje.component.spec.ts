import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPersonajeComponent } from './ver-personaje.component';

describe('VerPersonajeComponent', () => {
  let component: VerPersonajeComponent;
  let fixture: ComponentFixture<VerPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
