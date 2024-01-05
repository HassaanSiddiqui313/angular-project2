import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntactComponent } from './cntact.component';

describe('CntactComponent', () => {
  let component: CntactComponent;
  let fixture: ComponentFixture<CntactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CntactComponent]
    });
    fixture = TestBed.createComponent(CntactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
