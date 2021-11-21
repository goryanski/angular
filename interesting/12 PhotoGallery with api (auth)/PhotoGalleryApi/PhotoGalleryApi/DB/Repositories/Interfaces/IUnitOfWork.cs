using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhotoGalleryApi.DB.Repositories.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        PhotosRepository PhotosRepository { get; }
        CommentsRepository CommentsRepository { get; }
        AccountsRepository AccountsRepository { get; }
    }
}
