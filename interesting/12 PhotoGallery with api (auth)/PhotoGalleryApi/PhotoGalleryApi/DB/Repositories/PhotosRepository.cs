using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.DB.Entities;

namespace PhotoGalleryApi.DB.Repositories
{
    public class PhotosRepository : BaseRepository<Photo>
    {
        public PhotosRepository(DatabaseContext context) : base(context)
        {
        }

        public async Task Update(Photo entity)
        {
            var photo = await GetAsync(entity.Id);
            photo.Name = entity.Name;
            photo.Description = entity.Description;
            photo.Author = entity.Author;
            photo.Rating = entity.Rating;
            photo.Comments = entity.Comments;
            photo.Url = entity.Url;
            await UpdateAsync(photo);
        }

        internal async Task<Photo> GetLastAddedPhoto()
        {
            return await Task.FromResult(Table.ToList().Last());
        }
    }
}
