using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace PhotoGalleryApi.Models.Response
{
    public class JwtResponse
    {
        public string AccessToken { get; set; }
    }
}
