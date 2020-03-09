import { TestBed, async } from '@angular/core/testing';

import { AssessmentService, Assessment, AssessmentQuestions, Options } from './assessment.service';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControlName } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DebugElement } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AssessmentService', () => {
  let service: AssessmentService;
  // tslint:disable-next-line: prefer-const
  let dataList: Assessment[];
  // tslint:disable-next-line: prefer-const
  let dataQ: AssessmentQuestions;
  let dataQerror: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line: max-line-length
      imports: [FormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule, MatSnackBarModule, ReactiveFormsModule, HttpClientTestingModule],
    });
    service = TestBed.inject(AssessmentService);
    service.getAssessmentList().subscribe(data => {
      dataList = data;
    });
    service.putQuestion(dataQ, 'Html').subscribe(data => {
      dataQerror = data;
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get assessment list data', async((done: DoneFn) => {
    service.getAssessmentList().subscribe(value => {
      expect(value).toBe(dataList);
      done();
    });
  }));

  it('should try for put and get error', async((done: DoneFn) => {
    service.getCourse('').subscribe(value => {
      expect(value).toBe(dataQerror);
      done();
    });
  }));

  it('should try for put and get error', async((done: DoneFn) => {
    service.putQuestion(dataQ, 'HTML').subscribe(value => {
    },
      error => {
        expect(error).toBe('error');
        done();
      });
  }));

});
