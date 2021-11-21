using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.Bussines.Dto;

namespace PhotoGalleryApi.Bussines.Services.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(string login, string role);
    }
}
