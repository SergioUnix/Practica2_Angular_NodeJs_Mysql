import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarListaComponent } from './asociar-lista.component';

describe('AsociarListaComponent', () => {
  let component: AsociarListaComponent;
  let fixture: ComponentFixture<AsociarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
