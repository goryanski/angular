using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.Bussines.Dto.Photos;

namespace PhotoGalleryApi.Bussines.Services.Interfaces
{
    public interface IPhotosService
    {
        Task CreatePhoto(PhotoDto photo);
        Task<PhotoDto> GetPhotoById(int id);
        Task<List<PhotoDto>> GetAllPhotos();
        Task<PhotoDto> GetLastAddedPhoto();
        Task<bool> PhotoWasNotFound(int id);
        Task UpdatePhoto(PhotoDto photo);
    }
}
