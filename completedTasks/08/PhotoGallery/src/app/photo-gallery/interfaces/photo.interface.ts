export interface Photo {
  id?: number,
  name: string,
  description: string,
  rating: number,
  author: string,
  url: string,
  comments?: Comment[]
}
