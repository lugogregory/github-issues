import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalIssuesComponent } from './total-issues.component';
import { Store, StateObservable, ActionsSubject, ReducerManager, ReducerManagerDispatcher } from '@ngrx/store';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
// import { cold } from 'jasmine-marbles';
// import { AuthGuard } from '../guards/auth.guard';

describe('TotalIssuesComponent', () => {
  let store: MockStore;
  let component: TotalIssuesComponent;
  let fixture: ComponentFixture<TotalIssuesComponent>;
  const initialState = { loggedIn: false };
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<{positionClass: 'toast-bottom-full-width'}>) => { },
    error: (message?: string, title?: string, override?: Partial<{positionClass: 'toast-bottom-full-width'}>) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalIssuesComponent ],
      imports: [TranslateModule.forRoot()],
      providers: [Store,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        { provide: ToastrService, useValue: toastrService },
        ReducerManagerDispatcher,
        provideMockStore({ initialState }) ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deserializar repo OK', () => {
    const repoPrueba = 'https://github.com/lugogregory/github-issues';
    const resp = component.deserialize(repoPrueba);
    expect(resp).toBe('https://api.github.com/repos/lugogregory/github-issues/issues');
  });

  it('deserializar repo FAIL', () => {
    const repoPrueba = 'cualquier cadena de texto';
    const resp = component.deserialize(repoPrueba);
    expect(resp).toBe(null);
  });

});








 
// describe('Auth Guard', () => {
//   let guard: AuthGuard;
//   let store: MockStore;
//   const initialState = { loggedIn: false };
 
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         // any modules needed
//       ],
//       providers: [
//         AuthGuard,
//         provideMockStore({ initialState }),
//         // other providers
//       ],
//     });
 
//     store = TestBed.inject(MockStore);
//     guard = TestBed.inject(AuthGuard);
//   });
 
//   it('should return false if the user state is not logged in', () => {
//     const expected = cold('(a|)', { a: false });
 
//     expect(guard.canActivate()).toBeObservable(expected);
//   });
 
//   it('should return true if the user state is logged in', () => {
//     store.setState({ loggedIn: true });
 
//     const expected = cold('(a|)', { a: true });
 
//     expect(guard.canActivate()).toBeObservable(expected);
//   });
// });
