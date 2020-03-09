import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [AssessmentComponent, AssessmentFormComponent, AlertComponent, NewAssessmentComponent, NewQuestionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule
  ]
})
export class AssessmentModule { }
