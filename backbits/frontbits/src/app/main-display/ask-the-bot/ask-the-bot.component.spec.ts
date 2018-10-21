import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskTheBotComponent } from './ask-the-bot.component';

describe('AskTheBotComponent', () => {
  let component: AskTheBotComponent;
  let fixture: ComponentFixture<AskTheBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskTheBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskTheBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
