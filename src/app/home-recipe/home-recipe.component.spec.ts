import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecipeComponent } from './home-recipe.component';

describe('HomeRecipeComponent', () => {
  let component: HomeRecipeComponent;
  let fixture: ComponentFixture<HomeRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
