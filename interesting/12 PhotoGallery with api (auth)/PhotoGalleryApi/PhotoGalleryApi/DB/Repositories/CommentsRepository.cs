using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.DB.Entities;

namespace PhotoGalleryApi.DB.Repositories
{
    public class CommentsRepository : BaseRepository<Comment>
    {
        public CommentsRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
