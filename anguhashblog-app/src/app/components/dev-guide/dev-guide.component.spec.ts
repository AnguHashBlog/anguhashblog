import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGuideComponent } from './dev-guide.component';

describe('DevGuideComponent', () => {
  let component: DevGuideComponent;
  let fixture: ComponentFixture<DevGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
