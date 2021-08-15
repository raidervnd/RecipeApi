import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewRecipeComponent } from './form-new-recipe.component';

describe('FormNewRecipeComponent', () => {
  let component: FormNewRecipeComponent;
  let fixture: ComponentFixture<FormNewRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
