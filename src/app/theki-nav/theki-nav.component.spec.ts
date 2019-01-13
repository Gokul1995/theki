import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThekiNavComponent } from './theki-nav.component';

describe('ThekiNavComponent', () => {
  let component: ThekiNavComponent;
  let fixture: ComponentFixture<ThekiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThekiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThekiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
