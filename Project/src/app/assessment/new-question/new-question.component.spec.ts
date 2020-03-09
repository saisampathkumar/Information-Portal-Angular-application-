// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionComponent } from './new-question.component';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';


describe('NewQuestionComponent', () => {
  let component: NewQuestionComponent;
  let fixture: ComponentFixture<NewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionComponent ],
      // tslint:disable-next-line: max-line-length
      imports: [FormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule, MatSnackBarModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('new question required', () => {
    const crsEl = fixture.debugElement.nativeElement;
    expect(crsEl.querySelector('h1').textContent).toContain('Please add a question here');
  });
});
