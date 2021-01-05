import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCredentialsComponent } from './shop-credentials.component';

describe('ShopCredentialsComponent', () => {
  let component: ShopCredentialsComponent;
  let fixture: ComponentFixture<ShopCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
