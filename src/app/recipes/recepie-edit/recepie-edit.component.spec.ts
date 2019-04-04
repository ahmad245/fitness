import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieEditComponent } from './recepie-edit.component';

describe('RecepieEditComponent', () => {
  let component: RecepieEditComponent;
  let fixture: ComponentFixture<RecepieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
