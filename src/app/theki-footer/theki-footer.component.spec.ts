import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThekiFooterComponent } from './theki-footer.component';

describe('ThekiFooterComponent', () => {
  let component: ThekiFooterComponent;
  let fixture: ComponentFixture<ThekiFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThekiFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThekiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
