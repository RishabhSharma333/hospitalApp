import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontstaffComponent } from './frontstaff.component';

describe('FrontstaffComponent', () => {
  let component: FrontstaffComponent;
  let fixture: ComponentFixture<FrontstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
