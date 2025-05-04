
import React, { useState, useEffect } from 'react';
import { events } from '../data/events';
import { Event, EventType } from '../types/event';
import EventCard from '../components/EventCard';
import EventFilters from '../components/EventFilters';

const Dashboard: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');
  const [selectedCollege, setSelectedCollege] = useState('all');

  // Extract unique colleges
  const colleges = Array.from(new Set(events.map(event => event.college)))
    .map(college => ({
      value: college,
      label: college
    }));

  const eventTypes = [
    { value: 'hackathon', label: 'Hackathon' },
    { value: 'tech-talk', label: 'Tech Talk' },
    { value: 'workshop', label: 'Workshop' }
  ];

  // Filter events based on selected filters
  useEffect(() => {
    let result = [...events];
    
    if (selectedType !== 'all') {
      result = result.filter(event => event.type === selectedType);
    }
    
    if (selectedCollege !== 'all') {
      result = result.filter(event => event.college === selectedCollege);
    }

    // Sort events by date
    result.sort((a, b) => a.date.getTime() - b.date.getTime());
    
    setFilteredEvents(result);
  }, [selectedType, selectedCollege]);

  const handleTypeChange = (value: EventType | 'all') => {
    setSelectedType(value);
  };

  const handleCollegeChange = (value: string) => {
    setSelectedCollege(value);
  };

  const resetFilters = () => {
    setSelectedType('all');
    setSelectedCollege('all');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Tech Events</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find the latest hackathons, tech talks, and workshops happening at colleges and universities.
        </p>
      </div>

      <EventFilters 
        eventTypes={eventTypes}
        colleges={colleges}
        selectedType={selectedType}
        selectedCollege={selectedCollege}
        onTypeChange={handleTypeChange}
        onCollegeChange={handleCollegeChange}
        onReset={resetFilters}
      />

      {filteredEvents.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No events found matching your filters.</p>
          <button 
            onClick={resetFilters}
            className="mt-4 text-tech-purple hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="animate-fade-in">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
