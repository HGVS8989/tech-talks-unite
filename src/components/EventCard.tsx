
import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Event } from '../types/event';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const getEventTypeClass = () => {
    switch (event.type) {
      case 'hackathon':
        return 'tag-hackathon';
      case 'tech-talk':
        return 'tag-tech-talk';
      case 'workshop':
        return 'tag-workshop';
      default:
        return '';
    }
  };

  const formatEventDate = () => {
    const start = format(event.date, 'MMM d, yyyy');
    if (event.endDate) {
      const end = format(event.endDate, 'MMM d, yyyy');
      return `${start} - ${end}`;
    }
    return start;
  };

  return (
    <Link to={`/event/${event.id}`}>
      <div className="event-card overflow-hidden h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img 
            src={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <span className={`tag ${getEventTypeClass()}`}>
              {event.type.replace('-', ' ')}
            </span>
            <span className="text-xs text-tech-gray">{event.college}</span>
          </div>
          <h3 className="font-bold text-lg mb-2">{event.title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
            {event.description}
          </p>
          <div className="flex items-center text-xs text-tech-gray mt-2">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formatEventDate()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
