import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GellaryinfoComponent } from './gellaryinfo.component';

describe('GellaryinfoComponent', () => {
  let component: GellaryinfoComponent;
  let fixture: ComponentFixture<GellaryinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GellaryinfoComponent]
    });
    fixture = TestBed.createComponent(GellaryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
