import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuApprovalRequestComponent } from './add-menu-approval-request.component';

describe('AddMenuApprovalRequestComponent', () => {
  let component: AddMenuApprovalRequestComponent;
  let fixture: ComponentFixture<AddMenuApprovalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuApprovalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuApprovalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
