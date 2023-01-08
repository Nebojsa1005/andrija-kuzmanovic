import { Product } from '../../pages/home/models/products';
import { Injectable } from '@angular/core';

export interface UserData {
  socialMediaLinks: {name: string, link: string}[]
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  userData: UserData = {
    socialMediaLinks: [
      { name: 'Instagram', link: 'https://www.instagram.com/kuzmanovicaa/' },
      { name: 'Facebook', link: 'https://www.facebook.com/wcsola/' },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/andrijakuzmanovic/' }
    ]
  }

  productList: Product[] = [
    {
      typeOfWork: 'UX / UI design',
      title: 'Insel Sleep',
      name: 'insel-sleep',
      shortDescription: 'Insel sleep webpage',
      field: 'UX / UI design / Website design',
      companyDescription: 'Insel sleep is handcrafted German cloudlike down duvets and pillows of finest 100% goose down made for long-lasting comfort, premium style, and luxurious sleep.',
      sideImages: [
        [
          { name: 'insel-sleep-1' },
          { name: 'insel-sleep-2' }
        ]
      ],
      program: 'Figma',
      link: 'https://inselsleep.com/',
  
      isBigger: true,
    },
    {
      typeOfWork: 'Social Media',
      title: 'Oshee social media',
      name: 'oshee-social-media',
      shortDescription: 'Oshee social media',
      companyDescription: 'OSHEE is a brand for active people. Among them are people who go in for various sports, either as a hobby or professionally, as well as all those who follow current trends in life.',
      field: 'Social media design / Social media visual design',
      program: 'Adobe Photoshop',
      link: 'https://www.oshee.eu/',
      sideImages: [
        [
          { name: 'oshee-social-media-1' },
          { name: 'oshee-social-media-2' },
        ],
        [
          { name: 'oshee-social-media-3' },
          { name: 'oshee-social-media-4' },
        ]
      ],
      isBigger: true
    },
    {
      typeOfWork: 'UX / UI design',
      title: 'Dasigo',
      name: 'dasigo',
      shortDescription: 'Dasigo webpage',
      field: 'UX / UI design / Website Design',
      companyDescription: 'Dasigo is primarily a family company that strives to maintain the spirit of the private companies that were formed. The spirit of family business and work that is reflected in good interpersonal relationships is imbued with the inspiration to create and create the best for consumers in the markets in which we operate.',
      program: 'Figma',
      link: 'https://dasigo.rs/en/',
      sideImages: [
        [
          { name: 'dasigo-1' },
          { name: 'dasigo-2' }
        ]
      ],
      isBigger: false
    },
   
    {
      typeOfWork: 'Digital Design',
      title: 'Oshee energy drink',
      name: 'oshee-energy-drink',
      shortDescription: 'Oshee energy drink campaign',
      field: 'Social media design / Social media visual design',
      companyDescription: 'OSHEE is the market leader in functional beverages in Poland. It inspires, motivates for action, physical activity and healthy lifestyle. It puts a great product in the spotlight, which meets expectations of the most demanding customers.',
      program: 'Adobe Photoshop',
      sideImages: [
        [
          { name: 'oshee-energy-drink-1' },
          { name: 'oshee-energy-drink-2' }
        ]
      ],
      link: 'https://www.oshee.eu/',
      isBigger: true
    },
    {
      typeOfWork: 'UX / UI design',
      title: 'Ducati Genova webpage',
      name: 'ducati-genova-webpage',
      shortDescription: 'Ducati Genova webpage',
      field: 'UX / UI design / Website design',
      companyDescription: 'Ducati produces racing inspired motorcycles with unique engine features, innovative designs, advanced engineering and overall technical excellence.',
      program: 'Figma',
      link: 'https://www.ducatigenova.com/',
      sideImages: [
        [
          { name: 'ducati-genova-webpage-1' },
          { name: 'ducati-genova-webpage-2' }
        ]
      ],
      isBigger: true
    },
    {
      typeOfWork: 'Branding',
      title: 'Immunity Chef',
      name: 'immunity-chef',
      shortDescription: 'Immunity Chef Branding',
      field: 'Branding / Logo design',
      companyDescription: 'Immunity Chef is a delivery app, like Uber Eats and Postmates, that allows you to order food from your phone and have it delivered to your door. It offers local delivery of restaurant-prepared meals and other goods.',
      program: 'Adobe Illustrator',
      link: '',
      sideImages: [
        [
          { name: 'immunity-chef-1' },
          { name: 'immunity-chef-2' }
        ]
      ],
      isBigger: false
    },
    {
      typeOfWork: 'Packaging',
      title: 'Tesla charge batteries',
      name: 'tesla-charge-batteries',
      field: 'Packaging / Product design',
      companyDescription: 'Explore AA batteries, rechargeable batteries, chargers, coin button batteries and more from Tesla charge, the longer-lasting and trusted battery brand.',
      link: '',
      sideImages: [
        [
          { name: 'tesla-charge-batteries-1' },
          { name: 'tesla-charge-batteries-2' }
        ]
      ],
      program: 'Adobe Illustrator',
      shortDescription: "Tesla charge batteries",
      isBigger: true
    },
    {
      typeOfWork: 'UX / UI design',
      title: 'It’s GameTime',
      name: 'its-game-time',
      field: 'UX / UI design / Website & application design',
      companyDescription: 'GameTime is a messaging, scheduling, and file-exchange Cloud solution that enhances the way sports teams communicate and operate.',
      link: 'https://www.itsgametime.xyz/',
      sideImages: [
        [
          { name: 'its-game-time-1' },
          { name: 'its-game-time-2' }
        ]
      ],
      program: 'Figma',
      shortDescription: "It's GameTime website / app",
      isBigger: true
    },
    {
      title: "Caffe'd Italia social media",
      name: 'caffe-d-italia-social-media',
      shortDescription: "Caffe d' Italia social media",
      field: 'Social media design / Social media visual design',
      typeOfWork: 'Social Media',
      companyDescription: 'Caffè d’Italia has the ambitious project to bring everywhere and on every occasion, an espresso of the highest quality as the result of our passion and our system that makes the difference!',
      sideImages: [
        [
          { name: 'caffe-d-italia-social-media-1' },
          { name: 'caffe-d-italia-social-media-2' },

        ],
        [
          { name: 'caffe-d-italia-social-media-4' },
          { name: 'caffe-d-italia-social-media-3' },
        ]
      ],
      program: 'Adobe Photoshop',
      link: 'https://www.caffeditalia.it/',
      isBigger: true
    },
    {
      typeOfWork: 'Digital Design',
      title: 'Stara rakija billboard',
      name: 'stara-rakija-billboard',
      shortDescription: 'Stara rakija billboard',
      field: 'Digital design / Billboard design',
      companyDescription: 'Stara Rakija was created in the beautiful landscape at the foot of Zlatibor, and soon conquered the world with its charm. The richness of its flavors is a special confirmation that tradition and quality ideally coincide with innovation and style.',
      link: 'https://stararakija.rs/',
      sideImages: [
        [
          { name: 'stara-rakija-billboard-1' },
          { name: 'stara-rakija-billboard-2' }
        ]
      ],
      program: 'Adobe Illustrator',
      isBigger: false
    },
    {
      typeOfWork: 'Packaging',
      title: 'Proteo Fit Chocolate Bar',
      name: 'proteo-fit-chocolate-bar-white',
      field: 'Packaging / Product design',
      companyDescription: 'Gluten-free chocolate Protein bar is an ideal snack for all active people. It is a great choice for various sports activities, but also as a meal replacement for people in the office, on the road or in nature. Protein bar helps stimulate muscle growth and regeneration and prevent catabolic processes caused by physical exertion.',
      program: 'Adobe Illustrator',
      link: '',
      sideImages: [
        [
          { name: 'proteo-fit-chocolate-bar-white-1' },
          { name: 'proteo-fit-chocolate-bar-white-2' }
        ]
      ],
      shortDescription: 'ProteFit chocolate bar',
      isBigger: true
    },
    {
      typeOfWork: 'Digital Design',
      title: '“Vintage fest”',
      name: 'vintage-fest',
      shortDescription: '“Vintage fest”',
      field: 'Digital design / Festival design',
      companyDescription: 'At the first Vintage Fest in Belgrade, numerous decorative objects, jewelry, wardrobes, frames, plaques and other interesting things that can beautify the home or complement the wardrobe with special and unique retro pieces will be exhibited.',
      link: '',
      sideImages: [
        [
          { name: 'vintage-fest-1' },
          { name: 'vintage-fest-2' }
        ]
      ],
      program: 'Adobe Photoshop',
      isBigger: true
    },
    {
      typeOfWork: 'Branding',
      title: 'Waterfront market',
      name: 'waterfront-market',
      shortDescription: 'Waterfront market',
      field: 'Branding / Logo design',
      companyDescription: "Belgrade Waterfront, known in Serbian as Belgrade on Water, is an urban renewal development project headed by the Government of Serbia aimed at improving Belgrade's cityscape and economy by revitalizing the Sava amphitheater, between the Belgrade Fair and Branko's bridge.",
      link: '',
      sideImages: [
        [
          { name: 'waterfront-market-1' },
          { name: 'waterfront-market-2' }
        ]
      ],
      program: 'Adobe Illustrator',
      isBigger: false
    },
    {
      typeOfWork: 'Social Media',
      title: 'Osteria Mozzarella social media',
      name: 'osteria-mozzarella-social-media',
      shortDescription: 'Osteria Mozzarella social media',
      field: 'Social media design / Social media visual design',
      companyDescription: "Osteria is settled in pleasant ambience of the newest bloc A of New Belgrade, we armed ourselves by the team of cooks who are ready to experiment and we are waiting for you to travel together.",
      link: 'https://mozzarella.rs/',
      sideImages: [
        [
          { name: 'vintage-fest-1' },
          { name: 'vintage-fest-2' }
        ]
      ],
      program: 'Adobe Illustrator',
      isBigger: true
    },
    {
      typeOfWork: 'Packaging',
      title: 'Proteo Fit Chocolate Bar',
      name: 'proteo-fit-chocolate-bar-dark',
      field: 'Packaging / Product design',
      companyDescription: 'Gluten-free chocolate Protein bar is an ideal snack for all active people. It is a great choice for various sports activities, but also as a meal replacement for people in the office, on the road or in nature. Protein bar helps stimulate muscle growth and regeneration and prevent catabolic processes caused by physical exertion.',
      link: '',
      sideImages: [
        [
          { name: 'proteo-fit-chocolate-bar-dark-1' },
          { name: 'proteo-fit-chocolate-bar-dark-2' }
        ]
      ],
      program: 'Adobe Illustrator',
      shortDescription: "ProteoFit chocolate bar",
      isBigger: true
    }
  ]

  getProduct(name: string): Product {
    return this.productList.filter(( product: Product ) => product.name === name)[0]
  }

  getProductsByType(type: string) {
    return this.productList.filter((product: Product) => product.typeOfWork === type)
  }
  
  getProductByName(name: string) {
    return this.productList.filter((product: Product) => product.name === name)[0]
  }

  getImageSrc(base: string, productName: string, folderName = '') {
    if (!folderName) return `${base}${productName}/${productName}.png`
    return `${base}${folderName}/${productName}.png`
  }
}
