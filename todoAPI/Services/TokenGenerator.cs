using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using todoAPI.Models;

public class TokenGenerator
{
	private readonly IConfiguration _configuration;

	public TokenGenerator(IConfiguration configuration)
	{
		_configuration = configuration;
	}

	public string GenerateJwtToken(UserModel user)
	{
		var jwtConfig = _configuration.GetSection("JwtConfig");

		var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig["Key"]!));
		var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

		var claims = new[]
		{
			new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
			new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
			new Claim("id", user.Id.ToString())
		};

		var token = new JwtSecurityToken(
			issuer: jwtConfig["Issuer"],
			audience: jwtConfig["Audience"],
			claims: claims,
			expires: DateTime.UtcNow.AddMinutes(int.Parse(jwtConfig["TokenValidityMins"] ?? "30")),
			signingCredentials: credentials
		);

		return new JwtSecurityTokenHandler().WriteToken(token);
	}
}
