import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadMapComponent } from './road-map.component';

describe('RoadMapComponent', () => {
  let component: RoadMapComponent;
  let fixture: ComponentFixture<RoadMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
