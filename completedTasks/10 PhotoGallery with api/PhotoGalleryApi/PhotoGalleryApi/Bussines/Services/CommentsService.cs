using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.Bussines.Dto;
using PhotoGalleryApi.Bussines.Services.Interfaces;
using PhotoGalleryApi.DB.Repositories.Interfaces;

namespace PhotoGalleryApi.Bussines.Services
{
    public class CommentsService : ICommentsService
    {
        private IUnitOfWork uow;
        private Automapper.ObjectMapper objectMapper = Automapper.ObjectMapper.Instance;

        public CommentsService(IUnitOfWork uow)
        {
            this.uow = uow;
        }

        public async Task<List<CommentDto>> GetCommentsByPhotoId(int id)
        {
            var result = await uow.CommentsRepository.GetAllAsync(c => c.PhotoId == id);
            return objectMapper.Mapper.Map<List<CommentDto>>(result);
        }
    }
}
