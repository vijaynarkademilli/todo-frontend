import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodosComponent } from './list-todos.component';

//noinspection TypeScriptUnresolvedFunction
describe('ListTodosComponent', () => {
  let component: ListTodosComponent;
  let fixture: ComponentFixture<ListTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //noinspection TypeScriptUnresolvedFunction
    expect(component).toBeTruthy();
  });
});
