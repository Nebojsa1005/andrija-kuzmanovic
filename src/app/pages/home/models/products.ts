export interface CarouselItem {
  name: string
}

export interface ProductListItem {
  imageName: string,
  description: string
}

export interface AllProjectsItem {
  imageName: string,
  description: string,
  isBigger: boolean
}

export interface Product {
  title: string
  name: string,
  field: string,
  sideImages: any
  companyDescription: string,
  shortDescription: string,
  program: string,
  link: string,
  typeOfWork: string,
  isBigger: boolean
}

export interface SideImage {
  name: string
}