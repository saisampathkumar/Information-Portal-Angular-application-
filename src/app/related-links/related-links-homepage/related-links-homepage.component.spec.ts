import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedLinksHomepageComponent } from './related-links-homepage.component';

describe('RelatedLinksHomepageComponent', () => {
  let component: RelatedLinksHomepageComponent;
  let fixture: ComponentFixture<RelatedLinksHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedLinksHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedLinksHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
