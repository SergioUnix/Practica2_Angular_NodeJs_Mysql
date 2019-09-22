import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoProveedorComponent } from './producto-proveedor.component';

describe('ProductoProveedorComponent', () => {
  let component: ProductoProveedorComponent;
  let fixture: ComponentFixture<ProductoProveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoProveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
