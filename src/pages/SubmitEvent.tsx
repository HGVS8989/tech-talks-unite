
import React from 'react';
import EventForm from '../components/EventForm';

const SubmitEvent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Submit an Event</h1>
          <p className="text-gray-600">
            Share a tech talk, hackathon, or workshop happening at your college.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default SubmitEvent;
