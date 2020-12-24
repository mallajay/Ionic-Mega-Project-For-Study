import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RxjsVsEventApiPage } from './rxjs-vs-event-api.page';

describe('RxjsVsEventApiPage', () => {
  let component: RxjsVsEventApiPage;
  let fixture: ComponentFixture<RxjsVsEventApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsVsEventApiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsVsEventApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
