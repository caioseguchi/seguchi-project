import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpdateContactComponent } from './list-update-contact.component';

describe('ListUpdateContactComponent', () => {
  let component: ListUpdateContactComponent;
  let fixture: ComponentFixture<ListUpdateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUpdateContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUpdateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
