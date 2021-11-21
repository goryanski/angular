using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.Bussines.Dto.Photos;
using PhotoGalleryApi.Bussines.Services.Interfaces;
using PhotoGalleryApi.DB.Entities;
using PhotoGalleryApi.DB.Repositories.Interfaces;

namespace PhotoGalleryApi.Bussines.Services
{
    public class PhotosService : IPhotosService
    {
        private IUnitOfWork uow;
        private Automapper.ObjectMapper objectMapper = Automapper.ObjectMapper.Instance;

        public PhotosService(IUnitOfWork uow)
        {
            this.uow = uow;
        }


        public async Task CreatePhoto(PhotoDto photo)
        {
            var result = objectMapper.Mapper.Map<Photo>(photo);
            await uow.PhotosRepository.CreateAsync(result);
        }

        public async Task<List<PhotoDto>> GetAllPhotos()
        {
            var result = await uow.PhotosRepository.GetAllAsync();
            return objectMapper.Mapper.Map<List<PhotoDto>>(result);
        }

        public async Task<PhotoDto> GetLastAddedPhoto()
        {
            var result = await uow.PhotosRepository.GetLastAddedPhoto();
            return objectMapper.Mapper.Map<PhotoDto>(result);
        }

        public async Task<PhotoDto> GetPhotoById(int id)
        {
            var result = await uow.PhotosRepository.GetAsync(id);
            return objectMapper.Mapper.Map<PhotoDto>(result);
        }

        public async Task<bool> PhotoWasNotFound(int id)
        {
            return await GetPhotoById(id) == null;
        }

        public async Task UpdatePhoto(PhotoDto photo)
        {
            var result = objectMapper.Mapper.Map<Photo>(photo);
            await uow.PhotosRepository.Update(result);
        }
    }
}
