import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparePrices } from './compare-prices';

describe('ComparePrices', () => {
  let component: ComparePrices;
  let fixture: ComponentFixture<ComparePrices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparePrices],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparePrices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
