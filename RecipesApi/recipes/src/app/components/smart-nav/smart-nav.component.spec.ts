import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNavComponent } from './smart-nav.component';

describe('SmartNavComponent', () => {
  let component: SmartNavComponent;
  let fixture: ComponentFixture<SmartNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
