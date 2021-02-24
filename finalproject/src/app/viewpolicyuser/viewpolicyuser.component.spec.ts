import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpolicyuserComponent } from './viewpolicyuser.component';

describe('ViewpolicyuserComponent', () => {
  let component: ViewpolicyuserComponent;
  let fixture: ComponentFixture<ViewpolicyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpolicyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpolicyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
