import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFreeCntComponent } from './content-free-cnt.component';

describe('ContentFreeCntComponent', () => {
  let component: ContentFreeCntComponent;
  let fixture: ComponentFixture<ContentFreeCntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFreeCntComponent]
    });
    fixture = TestBed.createComponent(ContentFreeCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
