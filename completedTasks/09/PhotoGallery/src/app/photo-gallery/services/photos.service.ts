import { Injectable } from '@angular/core';
import {Photo} from "../interfaces/photo.interface";

function randomId(): number {
  return Math.random()*999999;
}

@Injectable()
export class PhotosService {
  photos: Photo[] = [
    {
      id: 1,
      name: 'autumn',
      description: 'autumn trees',
      rating: 4,
      author: 'Igor',
      url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
      comments: [
        {
          id: randomId(),
          author: 'Masha',
          date: new Date(2010, 10, 3),
          text: 'very beautiful photo!'
        },
        {
          id: randomId(),
          author: 'Pasha',
          date: new Date(2015, 12, 2),
          text: 'pretty good'
        },
        {
          id: randomId(),
          author: 'Marysia',
          date: new Date(2010, 9, 14),
          text: 'The best I`ve ever seen!'
        }
      ]
    },
    {
      id: 2,
      name: 'winter',
      description: 'winter bench',
      rating: 5,
      author: 'Inokentiy',
      url: 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/winter/benches-in-snow-covered-woods.jpg',
      comments: [
        {
          id: randomId(),
          author: 'Gena',
          date: new Date(2018, 10, 3),
          text: 'not bad'
        },
        {
          id: randomId(),
          author: 'Pasha',
          date: new Date(2015, 12, 2),
          text: 'awesome!!!'
        }
      ]
    },
    {
      id: 3,
      name: 'spring',
      description: 'spring flowers',
      rating: 3,
      author: 'Misha',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Colorful_spring_garden.jpg',
      comments: [
        {
          id: randomId(),
          author: 'Ilya',
          date: new Date(2019, 10, 7),
          text: 'amazing...'
        }
      ]
    },
    {
      id: 4,
      name: 'summer',
      description: 'summer beach',
      rating: 5,
      author: 'Lena',
      url: 'https://www.summerhouse.com.ua/medias/slide/big/9/slide-3.jpg',
      comments: []
    },
  ];

  constructor() {}

  private getNewPhotoId(): number {
    let lastPhotoId = this.photos[this.photos.length-1].id;
    return (lastPhotoId !== undefined) ? lastPhotoId + 1 : 1;
  }

  getPhotoById(id: number): Photo | undefined {
    return this.photos.find(ph => ph.id === id);
  }

  addPhoto(newPhoto: Photo) {
    newPhoto.id = this.getNewPhotoId();
    this.photos.push(newPhoto);
  }

  editPhoto(photo: Photo) {
    const searchPhotoIdx = this.photos.findIndex(ph => ph.id === photo.id);
    this.photos[searchPhotoIdx] = photo;
  }
}
