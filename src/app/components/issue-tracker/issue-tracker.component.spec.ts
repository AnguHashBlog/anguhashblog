import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTrackerComponent } from './issue-tracker.component';

describe('IssueTrackerComponent', () => {
  let component: IssueTrackerComponent;
  let fixture: ComponentFixture<IssueTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
