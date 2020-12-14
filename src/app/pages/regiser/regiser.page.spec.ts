import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegiserPage } from './regiser.page';

describe('RegiserPage', () => {
  let component: RegiserPage;
  let fixture: ComponentFixture<RegiserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegiserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
