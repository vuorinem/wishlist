namespace wishlist.Models {
  public class WishDto {
    public string WishlistName { get; set; }
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImgSrc { get; set; }
    public bool IsReserved { get; set; }
  }
