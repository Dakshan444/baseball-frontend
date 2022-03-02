import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookedEventComponent } from './viewbooked-event.component';

describe('ViewbookedEventComponent', () => {
  let component: ViewbookedEventComponent;
  let fixture: ComponentFixture<ViewbookedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookedEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
