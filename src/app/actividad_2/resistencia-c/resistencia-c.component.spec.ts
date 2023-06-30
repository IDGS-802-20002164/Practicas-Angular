import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaCComponent } from './resistencia-c.component';

describe('ResistenciaCComponent', () => {
  let component: ResistenciaCComponent;
  let fixture: ComponentFixture<ResistenciaCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistenciaCComponent]
    });
    fixture = TestBed.createComponent(ResistenciaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
