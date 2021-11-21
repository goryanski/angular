﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using PhotoGalleryApi.Bussines.Automapper.Profiles;

namespace PhotoGalleryApi.Bussines.Automapper
{
    public class ObjectMapper
    {
        private IMapper mapper;
        private static ObjectMapper _instance;
        public static ObjectMapper Instance => _instance ?? (_instance = new ObjectMapper());
        public IMapper Mapper => mapper;
        private ObjectMapper()
        {
            var mapCnfg = new MapperConfiguration(cnfg =>
            {
                cnfg.AddProfile(new MappingProfile());
            });
            mapper = mapCnfg.CreateMapper();
        }
    }
}
