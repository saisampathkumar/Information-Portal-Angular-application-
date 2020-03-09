import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AccountsService } from '../services/accounts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let accountsService: AccountsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [AccountsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    accountsService = TestBed.get(AccountsService);
    fixture.detectChanges();
  });

  it('should LogInComponent create', () => {
    expect(component).toBeTruthy();
  });

  it('All fields in Login filled and valid', () => {
    component.myForm.controls.userName.setValue('trungvo');
    component.myForm.controls.email.setValue('vtt311096@gmail.com');
    component.myForm.controls.passWord.setValue('pass');
    fixture.detectChanges();

    let logInBtn: DebugElement = fixture.debugElement.query(By.css('button'));
    logInBtn.triggerEventHandler('click', null);

    expect(component.myForm.valid).toBe(true);
  })

  it('Email valid', () => {
    component.myForm.controls.email.setValue('vtt311096@gmail.com');
    fixture.detectChanges();

    let logInBtn: DebugElement = fixture.debugElement.query(By.css('button'));
    logInBtn.triggerEventHandler('click', null);

    expect(component.myForm.controls.email.valid).toBe(true);
  })

  it('Email invalid', () => {
    component.myForm.controls.email.setValue('vtt311096@gmail.');
    fixture.detectChanges();

    let logInBtn: DebugElement = fixture.debugElement.query(By.css('button'));
    logInBtn.triggerEventHandler('click', null);

    expect(component.myForm.controls.email.valid).toBe(false);
  })
});
