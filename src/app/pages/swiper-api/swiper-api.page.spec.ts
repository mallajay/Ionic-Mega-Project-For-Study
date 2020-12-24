import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwiperApiPage } from './swiper-api.page';

describe('SwiperApiPage', () => {
  let component: SwiperApiPage;
  let fixture: ComponentFixture<SwiperApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperApiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwiperApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
