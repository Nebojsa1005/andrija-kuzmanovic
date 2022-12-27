import { Education } from './../models/work-experience';
import { Injectable } from '@angular/core';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  introductionText: string = "Hello, my name is Andrija. I am a professional graphic designer with over 2 years of experience. I have experience in designing Business cards, Letterheads, Logos, Flyers, Social media posts, Products, Web sites and web applications. I use Figma, Adobe Xd, Illustrator, Photoshop, InDesign, Premiere Pro and After Effects to design the graphics for you. Not only that, but I will provide high-quality work that will make all of my clients happy. I will complete many projects with customer satisfaction. If you have work related to my skills, then contact me."


  workExperience: WorkExperience[] = [
    {
      companyName: 'Wollson',
      type: 'Full-time',
      position: 'UX / UI Designer',
      time: 'January 2023 - Present',
      tasks: [
        'Investigated user experience design requirements for our suite of digital assets.',
        'Developing and conceptualizing a comprehensive UI/UX design strategy for the brand.',
        'Produced high-quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes.',
        'Designed UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.'
      ]
    },
    {
      companyName: 'Origo Advertising',
      type: 'Full-time',
      position: 'Graphic designer',
      time: 'May 2022 - December 2022',
      tasks: [
        'Helped 30 + clients in implementing their vision, mission and communicating their message through design by creating projects for them.',
        'Conceptualized 100+ posters, brochures, stationery, magazine, adverts, websites, photos, illustrations, vehicle wraps, product design...',
        'Met and discussed jobs with 20 + clients.',
        'Enhanced social media marketing by designing compiling campaigns.'
      ]
    },
    {
      companyName: 'NCR Corporation',
      type: 'Full-time',
      position: 'Help desk specialist',
      time: 'April 2020 - May 2020',
      tasks: [
        'Coordinated, diagnosed and troubleshot incoming end-user requests.',
        'Provided technical support services to end-users either local or remote with problems or issues related to information technology services including but not limited to: Applications, workstations, conference rooms, collaboration services, and network services.'
      ]
    },
    {
      companyName: 'Upwork',
      type: 'Freelance',
      position: 'Graphic design freelancer',
      time: 'June 2019 - April 2020',
      tasks: [
        'Helped 30+ clients in implementing their vision, mission and communicating their message through design by creating projects for them.',
        'Conceptualized 100+ posters, brochures, stationery, magazine, adverts, websites, photos, illustrations, vehicle wraps, product design...',
        'Met and discussed jobs with 20+ clients.',
        'Enhanced social media marketing by designing compiling campaigns.'
      ]
    }
  ]

  // Education
  educations: Education[] = [
    {
      name: 'ICT College',
      field: 'Communication technologies',
      time: 'October 2017 - Present'
    },
    {
      name: 'XV Belgrade High School',
      field: 'Natural sciences and mathematics',
      time: 'September 2013 - Jun 2017'
    }
  ]
}
