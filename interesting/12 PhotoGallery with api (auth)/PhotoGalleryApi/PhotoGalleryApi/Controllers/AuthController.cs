using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhotoGalleryApi.Bussines.Exceptions;
using PhotoGalleryApi.Bussines.Services.Interfaces;
using PhotoGalleryApi.Models.Response;
using PhotoGalleryApi.Models.ViewModels;

namespace PhotoGalleryApi.Controllers
{
    [ApiController]
    [Route("api/photoGallery/auth")]
    public class AuthController : ControllerBase
    {
        IAccountsService accountsService;
        ITokenService tokenService;
        public AuthController(IAccountsService accountsService, ITokenService tokenService)
        {
            this.accountsService = accountsService;
            this.tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<JwtResponse> Login([FromBody] LoginViewModel model)
        {
            ;
            var srcAcc = await accountsService.GetAccount(model.Username);

            if (srcAcc is null || !srcAcc.Password.Equals(model.Password))
            {
                throw new UserNotFoundException();
            }

            return new JwtResponse { AccessToken = tokenService.CreateToken(srcAcc.Username, srcAcc.Role) };
        }
    }
}
