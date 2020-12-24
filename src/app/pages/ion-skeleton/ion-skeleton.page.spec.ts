import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSkeletonPage } from './ion-skeleton.page';

describe('IonSkeletonPage', () => {
  let component: IonSkeletonPage;
  let fixture: ComponentFixture<IonSkeletonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSkeletonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSkeletonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
