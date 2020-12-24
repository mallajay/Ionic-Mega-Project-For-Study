import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordianPage } from './accordian.page';

describe('AccordianPage', () => {
  let component: AccordianPage;
  let fixture: ComponentFixture<AccordianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
