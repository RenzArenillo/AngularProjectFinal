import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrdersItemsComponent } from './pending-orders-items.component';

describe('PendingOrdersItemsComponent', () => {
  let component: PendingOrdersItemsComponent;
  let fixture: ComponentFixture<PendingOrdersItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOrdersItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingOrdersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
