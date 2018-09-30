import { RWishlistModule } from './r-wishlist.module';

describe('RWishlistModule', () => {
  let rWishlistModule: RWishlistModule;

  beforeEach(() => {
    rWishlistModule = new RWishlistModule();
  });

  it('should create an instance', () => {
    expect(rWishlistModule).toBeTruthy();
  });
});
