import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullParentComponent } from './full-parent.component';

describe('FullParentComponent', () => {
  let component: FullParentComponent;
  let fixture: ComponentFixture<FullParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
