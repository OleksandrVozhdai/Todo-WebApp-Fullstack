using Microsoft.EntityFrameworkCore;

namespace todoAPI.Models
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

		public DbSet<TodoModel> TodoSet { get; set; }
		public DbSet<UserModel> UsersSet { get; set; }
	}
}
