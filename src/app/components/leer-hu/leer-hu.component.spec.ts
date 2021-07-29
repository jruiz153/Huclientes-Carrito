import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerHuComponent } from './leer-hu.component';

describe('LeerHuComponent', () => {
  let component: LeerHuComponent;
  let fixture: ComponentFixture<LeerHuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerHuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerHuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
