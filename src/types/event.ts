
export type EventType = 'hackathon' | 'tech-talk' | 'workshop';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate?: Date;
  location: string;
  college: string;
  type: EventType;
  link?: string;
  imageUrl?: string;
}
