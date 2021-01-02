import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneIndexComponent } from './none-index.component';

describe('NoneIndexComponent', () => {
  let component: NoneIndexComponent;
  let fixture: ComponentFixture<NoneIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
