using Microsoft.AspNetCore.Authorization;
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
		private readonly TokenGenerator _tokenGenerator;

		public AuthController(AppDbContext context, TokenGenerator tokenGenerator)
		{
			_context = context;
			_tokenGenerator = tokenGenerator;
		}

		[HttpPost("register")]
		public async Task<IActionResult> Register([FromBody] UserDTO dto)
		{
			var userCheck = await _context.UsersSet.FirstOrDefaultAsync(u => u.UserName == dto.UserName);
			if (userCheck != null)
			{
				return BadRequest("User with this name already registered!");
			}

			if (dto.Password == null || dto.Password.Length <= 8)
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

			return Ok(new { message = "User registered!" });
		}

		[HttpPost("login")]
		public async Task<IActionResult> Login([FromBody] UserDTO dto)
		{
			var user = await _context.UsersSet.FirstOrDefaultAsync(u => u.UserName == dto.UserName);

			if (user == null)
				return Unauthorized("User not found");

			if (dto.Password == null)
				return Unauthorized("Invalid credentials");

			if (user.PasswordHash != PasswordHasher.Hash(dto.Password))
				return Unauthorized("Invalid credentials");

			var token = _tokenGenerator.GenerateJwtToken(user);

			return Ok(new { user.Id, user.UserName, token });
		}

		[Authorize]
		[HttpGet("me")]
		public IActionResult GetCurrentUser()
		{
			var userName = User.Identity?.Name;
			var id = User.FindFirst("id")?.Value;

			return Ok(new { userName, id });
		}
	}
}
