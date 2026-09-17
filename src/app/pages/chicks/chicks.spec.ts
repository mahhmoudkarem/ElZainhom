import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chicks } from './chicks';

describe('Chicks', () => {
  let component: Chicks;
  let fixture: ComponentFixture<Chicks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chicks],
    }).compileComponents();

    fixture = TestBed.createComponent(Chicks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
