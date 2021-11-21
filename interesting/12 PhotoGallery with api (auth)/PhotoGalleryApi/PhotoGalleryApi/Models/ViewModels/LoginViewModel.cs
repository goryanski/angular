using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PhotoGalleryApi.Models.ViewModels
{
    public class LoginViewModel
    {
        //[Required]
        //[RegularExpression("^[a-zA-Z_]{4,14}$")]
        public string Username { get; set; }

        //[Required]
        //[MinLength(4)]
        //[MaxLength(16)]
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
