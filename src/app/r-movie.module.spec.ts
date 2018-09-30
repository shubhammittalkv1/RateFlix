import { RMovieModule } from './r-movie.module';

describe('RMovieModule', () => {
  let rMovieModule: RMovieModule;

  beforeEach(() => {
    rMovieModule = new RMovieModule();
  });

  it('should create an instance', () => {
    expect(rMovieModule).toBeTruthy();
  });
});
