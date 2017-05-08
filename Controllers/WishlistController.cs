using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using wishlist.Models;

namespace wishlist.Controllers {
  [Route("api/[controller]")]
  public class WishlistController : Controller {
    private static IDictionary<string, WishlistDto> wishlists = new Dictionary<string, WishlistDto>();
    private static IDictionary<string, IList<WishDto>> wishes = new Dictionary<string, IList<WishDto>>();
  }
}
