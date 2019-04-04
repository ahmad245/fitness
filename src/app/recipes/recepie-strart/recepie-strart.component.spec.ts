import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieStrartComponent } from './recepie-strart.component';

describe('RecepieStrartComponent', () => {
  let component: RecepieStrartComponent;
  let fixture: ComponentFixture<RecepieStrartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieStrartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieStrartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
