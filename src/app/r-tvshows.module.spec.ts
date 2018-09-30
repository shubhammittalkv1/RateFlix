import { RTvshowsModule } from './r-tvshows.module';

describe('RTvshowsModule', () => {
  let rTvshowsModule: RTvshowsModule;

  beforeEach(() => {
    rTvshowsModule = new RTvshowsModule();
  });

  it('should create an instance', () => {
    expect(rTvshowsModule).toBeTruthy();
  });
});
