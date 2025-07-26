using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todoAPI.Models;
using todoAPI.Services;

namespace todoAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		private readonly AppDbContext _context;

		public AuthController(AppDbContext context)
		{
			_context = context;
		}

		[HttpPost("register")]
		public async Task<IActionResult> Register([FromBody] UserDTO dto)
		{
			var userCheck = await _context.UsersSet.FirstOrDefaultAsync(u => u.UserName == dto.UserName);
			if (userCheck != null)
			{
				return BadRequest("User with this name already registered!");
			}

			if(dto.Password == null || dto.Password.Length <= 8)
			{
				return BadRequest("Password must contain at least 8 chars!");
			}

			var user = new UserModel
			{
				UserName = dto.UserName,
				PasswordHash = PasswordHasher.Hash(dto.Password)
			};

			_context.UsersSet.Add(user);
			await _context.SaveChangesAsync();

			return Ok(new { message = "User registered!"});
		}

		[HttpPost("login")]
		public async Task<IActionResult> Login([FromBody] UserDTO dto)
		{
			var user = await _context.UsersSet.FirstOrDefaultAsync(u => u.UserName == dto.UserName);

			if (user == null)
				return Unauthorized("User not found");

			if(dto.Password == null)
				return Unauthorized("Invalid credentials");

			if (user.PasswordHash != PasswordHasher.Hash(dto.Password))
				return Unauthorized("Invalid credentials");

			return Ok(new { user.Id, user.UserName });
		}
	}
}
