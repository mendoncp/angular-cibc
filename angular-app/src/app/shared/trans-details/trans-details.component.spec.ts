import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransDetailsComponent } from './trans-details.component';

describe('TransDetailsComponent', () => {
  let component: TransDetailsComponent;
  let fixture: ComponentFixture<TransDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
