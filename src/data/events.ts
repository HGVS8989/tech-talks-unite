
import { Event } from '../types/event';

export const events: Event[] = [
  {
    id: '1',
    title: 'AI and Machine Learning Workshop',
    description: 'Learn the fundamentals of AI and machine learning in this hands-on workshop led by industry experts.',
    date: new Date(2025, 5, 15, 10, 0),
    location: 'Science Building, Room 302',
    college: 'MIT',
    type: 'workshop',
    link: 'https://mit.edu/events/ai-workshop',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Blockchain Hackathon',
    description: 'Join us for a 48-hour coding challenge to build innovative blockchain solutions. Open to all skill levels.',
    date: new Date(2025, 5, 20, 9, 0),
    endDate: new Date(2025, 5, 22, 9, 0),
    location: 'Engineering Hall',
    college: 'Stanford University',
    type: 'hackathon',
    link: 'https://stanford.edu/hackathon2025',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Future of Web Development',
    description: 'A tech talk by senior engineers from Google discussing the latest trends in web development.',
    date: new Date(2025, 5, 25, 15, 30),
    location: 'Computer Science Building, Auditorium',
    college: 'Carnegie Mellon',
    type: 'tech-talk',
    link: 'https://cmu.edu/events/web-dev-talk',
    imageUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Cybersecurity Workshop',
    description: 'Learn practical cybersecurity skills and how to protect your applications from common vulnerabilities.',
    date: new Date(2025, 6, 5, 13, 0),
    location: 'Online (Virtual Event)',
    college: 'Harvard University',
    type: 'workshop',
    link: 'https://harvard.edu/cybersecurity-2025',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Mobile App Development Hackathon',
    description: 'Build a mobile app in 24 hours that addresses a social challenge. Prizes for the top three teams!',
    date: new Date(2025, 6, 10, 10, 0),
    endDate: new Date(2025, 6, 11, 10, 0),
    location: 'Student Center',
    college: 'UC Berkeley',
    type: 'hackathon',
    link: 'https://berkeley.edu/mobile-hackathon',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Tech Ethics Panel Discussion',
    description: 'Join tech industry leaders for a discussion on ethical considerations in technology development.',
    date: new Date(2025, 6, 15, 16, 0),
    location: 'Philosophy Hall, Room 101',
    college: 'Princeton University',
    type: 'tech-talk',
    link: 'https://princeton.edu/events/tech-ethics',
    imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '7',
    title: 'Data Science Workshop',
    description: 'Hands-on workshop on data analysis, visualization, and machine learning techniques.',
    date: new Date(2025, 6, 22, 11, 0),
    location: 'Statistics Department, Lab 204',
    college: 'UCLA',
    type: 'workshop',
    link: 'https://ucla.edu/data-science-workshop',
    imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '8',
    title: 'Game Development Hackathon',
    description: 'Create a game in 48 hours using any platform or technology. Open to beginners and experts alike.',
    date: new Date(2025, 7, 1, 9, 0),
    endDate: new Date(2025, 7, 3, 9, 0),
    location: 'Digital Arts Center',
    college: 'NYU',
    type: 'hackathon',
    link: 'https://nyu.edu/game-dev-hackathon',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '9',
    title: 'Quantum Computing: Present and Future',
    description: 'A technical overview of quantum computing advancements and their potential impact on the tech industry.',
    date: new Date(2025, 7, 8, 14, 0),
    location: 'Physics Building, Lecture Hall 3',
    college: 'Caltech',
    type: 'tech-talk',
    link: 'https://caltech.edu/quantum-computing-talk',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop'
  }
];
