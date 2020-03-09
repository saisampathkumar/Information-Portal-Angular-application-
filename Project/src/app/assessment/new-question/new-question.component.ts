import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {
  AssessmentQuestions,
  AssessmentService,
  Assessment
} from '../assessment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
  constructor(
    private formB: FormBuilder,
    private router: Router,
    private assSvc: AssessmentService,
    private snackBar: MatSnackBar
  ) {}

  Answers = [1, 2, 3, 4];
  courses = ['Angular', 'JavaScript', 'NodeJs'];
  courseDt: Assessment[];
  specCourseDt: Assessment;
  courseNewQuestion: AssessmentQuestions;
  count = 0;

  assessmentForm: FormGroup = this.formB.group({
    course: ['', [Validators.required]],
    ques1: ['', [Validators.required]],
    ques1op1: ['', [Validators.required]],
    ques1op2: ['', [Validators.required]],
    ques1op3: ['', [Validators.required]],
    ques1op4: ['', [Validators.required]],
    ques1Ans: ['', [Validators.required]]
  });
  ngOnInit(): void {
    this.assSvc.getAssessmentList().subscribe(data => {
      this.courseDt = data;
    });
  }
  dataSubmit() {
    const q1ans = [false, false, false, false];
    this.Answers.forEach(num => {
        if (this.assessmentForm.value.ques1Ans == num) {
          q1ans[num - 1] = true;
        }
      });
    this.courseDt.forEach(data => {

      if (data.courseName === this.assessmentForm.value.course) {

        this.specCourseDt = data;

        this.courseNewQuestion = {
          id: this.specCourseDt.courseData.length,
          q: this.assessmentForm.value.ques1,
          options: [
            {
              id: 1,
              opt: this.assessmentForm.value.ques1op1,
              optAns: q1ans[0],
            },
            {
              id: 2,
              opt: this.assessmentForm.value.ques1op2,
              optAns: q1ans[1]
            },
            {
              id: 3,
              opt: this.assessmentForm.value.ques1op3,
              optAns: q1ans[2]
            },
            {
              id: 4,
              opt: this.assessmentForm.value.ques1op4,
              optAns: q1ans[3]
            }
          ]
        };
      }
    });

    this.specCourseDt.courseData.push(this.courseNewQuestion);
    this.assSvc.putQuestion(
        this.specCourseDt,
        this.courses.indexOf(this.assessmentForm.value.course)
      ).subscribe(questiondata => {
        this.snackBar.open('Successfully saved data', 'Ok', {
          duration: 5000
        });
      });
    setTimeout(() => {
      this.router.navigate(['/assessment']);
    }, 1000);
  }
}
