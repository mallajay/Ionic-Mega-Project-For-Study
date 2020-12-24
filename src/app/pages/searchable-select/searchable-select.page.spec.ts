import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchableSelectPage } from './searchable-select.page';

describe('SearchableSelectPage', () => {
  let component: SearchableSelectPage;
  let fixture: ComponentFixture<SearchableSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchableSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
