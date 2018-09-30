import { RHomeModule } from './r-home.module';

describe('RHomeModule', () => {
  let rHomeModule: RHomeModule;

  beforeEach(() => {
    rHomeModule = new RHomeModule();
  });

  it('should create an instance', () => {
    expect(rHomeModule).toBeTruthy();
  });
});
