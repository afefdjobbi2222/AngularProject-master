import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarbitreComponent } from './addarbitre.component';

describe('AddarbitreComponent', () => {
  let component: AddarbitreComponent;
  let fixture: ComponentFixture<AddarbitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddarbitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarbitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
