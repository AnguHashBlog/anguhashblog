import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePickerComponent } from './issue-picker.component';

describe('IssuePickerComponent', () => {
  let component: IssuePickerComponent;
  let fixture: ComponentFixture<IssuePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
