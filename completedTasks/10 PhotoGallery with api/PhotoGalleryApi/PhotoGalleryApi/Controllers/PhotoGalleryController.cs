using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhotoGalleryApi.Bussines.Dto;
using PhotoGalleryApi.Bussines.Dto.Photos;
using PhotoGalleryApi.Bussines.Services.Interfaces;

namespace PhotoGalleryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotoGalleryController : ControllerBase
    {
        IPhotosService photosService;
        ICommentsService commentsService;
        public PhotoGalleryController(IPhotosService photosService, ICommentsService commentsService)
        {
            this.photosService = photosService;
            this.commentsService = commentsService;
        }

        [HttpGet]
        public async Task<IEnumerable<PhotoDto>> GetAllPhotos()
        {
            return await photosService.GetAllPhotos();
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<PhotoDto> GetPhotoById(int id)
        {
            return await photosService.GetPhotoById(id);
        }

        [HttpPost]
        public async Task<PhotoDto> Create(PhotoDto photo)
        {
            await photosService.CreatePhoto(photo);
            return await photosService.GetLastAddedPhoto();
        }

        [HttpPut]
        public async Task<ActionResult> Update(PhotoDto photo)
        {
            if (await photosService.PhotoWasNotFound(photo.Id))
            {
                return BadRequest("Photo was not found");
            }

            await photosService.UpdatePhoto(photo);
            return new JsonResult(await photosService.GetPhotoById(photo.Id));
        }


        [HttpGet("comments")]
        [Route("comments/{id:int}")]
        public async Task<List<CommentDto>> GetComments(int id)
        {
            if (await photosService.PhotoWasNotFound(id))
            {
                return new List<CommentDto> {
                    new CommentDto { Text = $"There's no photo with id={id}" }
                };
            }
            return await commentsService.GetCommentsByPhotoId(id);
        }
    }
}
