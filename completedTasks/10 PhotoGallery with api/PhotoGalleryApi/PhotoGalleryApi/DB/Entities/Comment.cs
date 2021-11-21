using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhotoGalleryApi.DB.Entities
{
    public class Comment: BaseEntity
    {
        public string Author { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public Photo Photo { get; set; }
        public int PhotoId { get; set; }
    }
}
