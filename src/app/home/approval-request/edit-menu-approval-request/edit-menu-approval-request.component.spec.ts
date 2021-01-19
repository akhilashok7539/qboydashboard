import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuApprovalRequestComponent } from './edit-menu-approval-request.component';

describe('EditMenuApprovalRequestComponent', () => {
  let component: EditMenuApprovalRequestComponent;
  let fixture: ComponentFixture<EditMenuApprovalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuApprovalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuApprovalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
