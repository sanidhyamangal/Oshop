import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOrderSummaryComponent } from './shipping-order-summary.component';

describe('ShippingOrderSummaryComponent', () => {
  let component: ShippingOrderSummaryComponent;
  let fixture: ComponentFixture<ShippingOrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingOrderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
