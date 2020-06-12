import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSocketComponent } from './use-socket.component';

describe('UseSocketComponent', () => {
  let component: UseSocketComponent;
  let fixture: ComponentFixture<UseSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
