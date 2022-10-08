import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetRedirComponent } from './forget-redir.component';

describe('ForgetRedirComponent', () => {
  let component: ForgetRedirComponent;
  let fixture: ComponentFixture<ForgetRedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetRedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetRedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
