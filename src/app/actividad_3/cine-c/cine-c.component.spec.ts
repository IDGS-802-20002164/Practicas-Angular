import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineCComponent } from './cine-c.component';

describe('CineCComponent', () => {
  let component: CineCComponent;
  let fixture: ComponentFixture<CineCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CineCComponent]
    });
    fixture = TestBed.createComponent(CineCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
