import { TestBed } from '@angular/core/testing';

import { IntlInputIsjIsiThreeService } from './intl-input-isj-isi-three.service';

describe('IntlInputIsjIsiThreeService', () => {
  let service: IntlInputIsjIsiThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntlInputIsjIsiThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
