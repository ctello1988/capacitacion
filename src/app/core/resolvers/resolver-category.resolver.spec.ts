import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolverCategoryResolver } from './resolver-category.resolver';

describe('resolverCategoryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => resolverCategoryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
