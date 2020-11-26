import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineshopComponent } from './medicineshop.component';

describe('MedicineshopComponent', () => {
  let component: MedicineshopComponent;
  let fixture: ComponentFixture<MedicineshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
