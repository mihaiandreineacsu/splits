import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRunComponent } from './view-run.component';

describe('ViewRunComponent', () => {
  let component: ViewRunComponent;
  let fixture: ComponentFixture<ViewRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
