using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using PhotoGalleryApi.Bussines.Dto;
using PhotoGalleryApi.Bussines.Services.Interfaces;
using PhotoGalleryApi.Utils;

namespace PhotoGalleryApi.Bussines.Services
{
    public class TokenService : ITokenService
    {
        public string CreateToken(string login, string role)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, login),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, role),
            };

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

            var jwtRules = new JwtSecurityToken(
                issuer: JwtAuthOptions.ISSUER,
                audience: JwtAuthOptions.AUDIENCE,
                notBefore: DateTime.UtcNow,
                claims: claimsIdentity.Claims,
                expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(JwtAuthOptions.LIFETIME_SEC)),
                signingCredentials: new SigningCredentials(
                    JwtAuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256
                    )
                );

            return new JwtSecurityTokenHandler().WriteToken(jwtRules);
        }
    }
}
