import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGestionComponent } from './login-gestion.component';

describe('LoginGestionComponent', () => {
  let component: LoginGestionComponent;
  let fixture: ComponentFixture<LoginGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
