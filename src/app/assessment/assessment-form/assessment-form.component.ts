import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  AssessmentService,
  AssessmentQuestions,
  Assessment
} from '../assessment.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {
  // @Input() courseData: AssessmentQuestions;
  courseNm: Assessment;
  courseData: AssessmentQuestions[];
  courseNameStr: string;
  showalert: boolean;

  score = 0;
  ans = [];
  userAns = [];

  constructor(private Svc: AssessmentService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.userAns = [];
    this.router.routerState.root.queryParams.subscribe(params => {
      this.courseNameStr = params.course;
      this.Svc.getCourse(this.courseNameStr).subscribe(coursD => {
        if (coursD[0] !== undefined) {
          this.courseData = coursD[0].courseData;
          this.courseNm = coursD[0];
        }
        this.courseData.forEach(crs => {
          crs.options.forEach(op => {
            if (op.optAns === true) {
              this.ans.push(op.opt);
              this.userAns.push(false);
            }
          });
        });
      },
      error => {
        this.snackBar.open('Sorry. There was a problem getting Course data, please check the server and try again', 'Ok', {
          duration: 2000,
        });
      });
    },
    error => {
      this.snackBar.open('Sorry. There was a problem getting root params, please check the server and try again', 'Ok', {
        duration: 2000,
      });
    });
  }

  navBack() {
    this.router.navigate(['assessment']);
  }

  submitForm(myForm: NgForm) {
    this.score = 0;
    for (let i = 0; i < this.ans.length; i++) {
      if (this.ans[i] === myForm.form.value[i]) {
        this.score += 1;
        this.userAns[i] = true;
      }
    }
  }
}
