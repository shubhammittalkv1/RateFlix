import { RSearchModule } from './r-search.module';

describe('RSearchModule', () => {
  let rSearchModule: RSearchModule;

  beforeEach(() => {
    rSearchModule = new RSearchModule();
  });

  it('should create an instance', () => {
    expect(rSearchModule).toBeTruthy();
  });
});
