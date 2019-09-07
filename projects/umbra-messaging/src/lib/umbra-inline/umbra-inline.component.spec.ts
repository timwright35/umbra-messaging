import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbraInlineComponent } from './umbra-inline.component';

describe('UmbraInlineComponent', () => {
  let component: UmbraInlineComponent;
  let fixture: ComponentFixture<UmbraInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbraInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbraInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
