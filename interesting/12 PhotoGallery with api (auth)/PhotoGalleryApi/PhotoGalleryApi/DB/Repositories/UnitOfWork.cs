using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.DB.Entities;
using PhotoGalleryApi.DB.Repositories.Interfaces;

namespace PhotoGalleryApi.DB.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        DatabaseContext db;
        PhotosRepository _photosRepository;
        CommentsRepository _commentsRepository;
        AccountsRepository _accountsRepository;

        public PhotosRepository PhotosRepository =>
           _photosRepository ?? (_photosRepository = new PhotosRepository(db));
        public CommentsRepository CommentsRepository =>
           _commentsRepository ?? (_commentsRepository = new CommentsRepository(db));
        public AccountsRepository AccountsRepository =>
          _accountsRepository ?? (_accountsRepository = new AccountsRepository(db));

        public UnitOfWork(DatabaseContext context)
        {
            db = context;

            //DbInit();
            
        }

        private void DbInit()
        {
            Photo photo1 = new Photo
            {
                Name = "autumn",
                Description = "autumn trees",
                Rating = 4,
                Author = "Igor",
                Url = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
            };
            Photo photo2 = new Photo
            {
                Name = "winter",
                Description = "winter bench",
                Rating = 5,
                Author = "Inokentiy",
                Url = "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/winter/benches-in-snow-covered-woods.jpg"
            };
            Photo photo3 = new Photo
            {
                Name = "spring",
                Description = "spring flowers",
                Rating = 3,
                Author = "Misha",
                Url = "https://upload.wikimedia.org/wikipedia/commons/9/92/Colorful_spring_garden.jpg"
            };
            Photo photo4 = new Photo
            {
                Name = "summer",
                Description = "summer beach",
                Rating = 5,
                Author = "Lena",
                Url = "https://www.summerhouse.com.ua/medias/slide/big/9/slide-3.jpg"
            };

            db.Photos.Add(photo1);
            db.Photos.Add(photo2);
            db.Photos.Add(photo3);
            db.Photos.Add(photo4);
            db.SaveChanges();


            Comment comment1 = new Comment
            {
                Author = "Masha",
                Date = new DateTime(2010, 10, 3),
                Text = "very beautiful photo!",
                PhotoId = photo1.Id
            };
            Comment comment2 = new Comment
            {
                Author = "Pasha",
                Date = new DateTime(2015, 12, 2),
                Text = "pretty good",
                PhotoId = photo1.Id
            };
            Comment comment3 = new Comment
            {
                Author = "Marysia",
                Date = new DateTime(2010, 4, 19),
                Text = "The best I`ve ever seen!",
                PhotoId = photo1.Id
            };
            Comment comment4 = new Comment
            {
                Author = "Gena",
                Date = new DateTime(2018, 10, 3),
                Text = "not bad",
                PhotoId = photo2.Id
            };
            Comment comment5 = new Comment
            {
                Author = "Pasha",
                Date = new DateTime(2015, 12, 2),
                Text = "awesome!!!",
                PhotoId = photo2.Id
            };
            Comment comment6 = new Comment
            {
                Author = "Ilya",
                Date = new DateTime(2019, 10, 7),
                Text = "amazing...",
                PhotoId = photo3.Id
            };

            db.Comments.Add(comment1);
            db.Comments.Add(comment2);
            db.Comments.Add(comment3);
            db.Comments.Add(comment4);
            db.Comments.Add(comment5);
            db.Comments.Add(comment6);

            Account account1 = new Account
            {
                Password = "123456",
                Username = "vasya",
                Role = "USER"
            };
            Account account2 = new Account
            {
                Password = "admin",
                Username = "admin",
                Role = "ADMIN"
            };

            db.Accounts.Add(account1);
            db.Accounts.Add(account2);

            db.SaveChanges();
        }

        private bool disposed = false;
        public virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                disposed = true;
            }
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}