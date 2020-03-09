import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleComponent } from './add-article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddArticleComponent', () => {
  let component: AddArticleComponent;
  let fixture: ComponentFixture<AddArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddArticleComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test add-article component', () => {
    expect(component.articleForm.invalid).toBe(true);
    component.articleForm.setValue({
      subject: "Angular",
      title: "Learn Angular",
      timeToRead: 8,
      image: null,
      imageURL: null,
      tags: ["Angular"],
      mdText: "**Test**"
    });
    expect(component.articleForm.valid).toBeTruthy();
  });
});
