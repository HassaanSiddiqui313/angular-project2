import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdetsComponent } from './contactdets.component';

describe('ContactdetsComponent', () => {
  let component: ContactdetsComponent;
  let fixture: ComponentFixture<ContactdetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactdetsComponent]
    });
    fixture = TestBed.createComponent(ContactdetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
