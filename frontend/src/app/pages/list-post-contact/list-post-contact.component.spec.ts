import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostContactComponent } from './list-post-contact.component';

describe('ListPostContactComponent', () => {
  let component: ListPostContactComponent;
  let fixture: ComponentFixture<ListPostContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPostContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
