import { Education } from './../models/work-experience';
import { Injectable } from '@angular/core';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  workExperience: WorkExperience[] = [
    {
      companyName: 'Origo Advertising',
      type: 'Full-time',
      position: 'Graphic designer',
      time: 'May 2022 - Present',
      tasks: [
        '• Helped 30 + clients in implementing their vision, mission and communicating their message through design by creating projects for them.',
        '• Conceptualized 100+ posters, brochures, stationery, magazine, adverts, websites, photos, illustrations, vehicle wraps, product design...',
        '• Met and discussed jobs with 20 + clients.',
        '• Enhanced social media marketing by designing compiling campaigns.'
      ]
    },
    {
      companyName: 'NCR Corporation',
      type: 'Full-time',
      position: 'Help desk specialist',
      time: 'April 2020 - May 2020',
      tasks: [
        '• Coordinated, diagnosed and troubleshot incoming end-user requests.',
        '• Provided technical support services to end-users either local or remote with problems or issues related to information technology services including but not limited to: Applications, workstations, conference rooms, collaboration services, and network services.'
      ]
    },
    {
      companyName: 'Upwork',
      type: 'Freelance',
      position: 'Graphic design freelancer',
      time: 'June 2019 - April 2020',
      tasks: [
        '• Helped 30+ clients in implementing their vision, mission and communicating their message through design by creating projects for them.',
        '• Conceptualized 100+ posters, brochures, stationery, magazine, adverts, websites, photos, illustrations, vehicle wraps, product design...',
        '• Met and discussed jobs with 20+ clients.',
        '•Enhanced social media marketing by designing compiling campaigns.'
      ]
    }
  ]

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
