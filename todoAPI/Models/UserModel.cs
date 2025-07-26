namespace todoAPI.Models
{
	public class UserModel
	{
		public int Id { get; set; }
		public string? UserName { get; set; }
		public string PasswordHash { get; set; } = string.Empty;
	}
}
