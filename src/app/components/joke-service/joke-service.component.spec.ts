import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeServiceComponent } from './joke-service.component';

describe('JokeServiceComponent', () => {
  let component: JokeServiceComponent;
  let fixture: ComponentFixture<JokeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
