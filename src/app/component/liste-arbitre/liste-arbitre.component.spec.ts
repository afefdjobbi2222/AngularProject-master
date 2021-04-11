import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArbitreComponent } from './liste-arbitre.component';

describe('ListeArbitreComponent', () => {
  let component: ListeArbitreComponent;
  let fixture: ComponentFixture<ListeArbitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeArbitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArbitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
