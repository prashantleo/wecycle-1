import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleInfoComponent } from './recycle-info.component';

describe('RecycleInfoComponent', () => {
  let component: RecycleInfoComponent;
  let fixture: ComponentFixture<RecycleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
