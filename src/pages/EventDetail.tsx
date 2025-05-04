
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { events } from '../data/events';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/')}>
          Back to Events
        </Button>
      </div>
    );
  }

  const formatEventDate = () => {
    const start = format(event.date, 'EEEE, MMMM d, yyyy');
    if (event.endDate) {
      const end = format(event.endDate, 'EEEE, MMMM d, yyyy');
      return `${start} - ${end}`;
    }
    return start;
  };

  const formatEventTime = () => {
    return format(event.date, 'h:mm a');
  };

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

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/"
        className="inline-flex items-center text-tech-purple hover:text-tech-dark-purple mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to events
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 md:h-80 overflow-hidden">
          <img 
            src={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"} 
            alt={event.title}
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`tag ${getEventTypeClass()}`}>
              {event.type.replace('-', ' ')}
            </span>
            <span className="text-sm text-tech-gray">
              {event.college}
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h1>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex items-start space-x-2">
              <Calendar className="h-5 w-5 text-tech-purple mt-0.5" />
              <div>
                <p className="font-medium">{formatEventDate()}</p>
                <p className="text-sm text-gray-600">{formatEventTime()}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-tech-purple mt-0.5" />
              <div>
                <p className="font-medium">{event.location}</p>
                <p className="text-sm text-gray-600">{event.college}</p>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-3">About this event</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {event.description}
            </p>
          </div>
          
          {event.link && (
            <div className="mt-8">
              <a 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-tech-purple hover:bg-tech-dark-purple">
                  Visit Event Website
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
