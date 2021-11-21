using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.DB.Entities;

namespace PhotoGalleryApi.DB.Repositories
{
    public class AccountsRepository : BaseRepository<Account>
    {
        public AccountsRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
