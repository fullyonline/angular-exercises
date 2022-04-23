import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTextComponent } from './parent-text.component';

describe('ParentTextComponent', () => {
  let component: ParentTextComponent;
  let fixture: ComponentFixture<ParentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
