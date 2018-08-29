/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutKindlePushComponent } from './about-kindle-push.component';

describe('AboutKindlePushComponent', () => {
  let component: AboutKindlePushComponent;
  let fixture: ComponentFixture<AboutKindlePushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutKindlePushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutKindlePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
