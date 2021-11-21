using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using PhotoGalleryApi.Bussines.Dto;
using PhotoGalleryApi.Bussines.Dto.Photos;
using PhotoGalleryApi.DB.Entities;

namespace PhotoGalleryApi.Bussines.Automapper.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Photo, PhotoDto>();
            CreateMap<PhotoDto, Photo>();

            CreateMap<Photo, PhotoAllInfoDto>();
            CreateMap<PhotoAllInfoDto, Photo>();

            CreateMap<Comment, CommentDto>();
            CreateMap<CommentDto, Comment>();
        }
    }
}
