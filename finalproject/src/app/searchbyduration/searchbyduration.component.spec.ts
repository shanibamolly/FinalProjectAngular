import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbydurationComponent } from './searchbyduration.component';

describe('SearchbydurationComponent', () => {
  let component: SearchbydurationComponent;
  let fixture: ComponentFixture<SearchbydurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbydurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbydurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
