<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';
=======
import { TestBed, async } from '@angular/core/testing';
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
<<<<<<< HEAD
  });
=======
  }));
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'FrontendRVA2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FrontendRVA2');
=======
  it(`should have as title 'AngularStarterProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularStarterProject');
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span').textContent).toContain('FrontendRVA2 app is running!');
=======
    expect(compiled.querySelector('.content span').textContent).toContain('AngularStarterProject app is running!');
>>>>>>> 33cc7361ba9146bbbfe21b21a762f9845c108c98
  });
});
