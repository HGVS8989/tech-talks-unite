
import React from 'react';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EventType } from '../types/event';

interface EventFiltersProps {
  eventTypes: { value: EventType; label: string }[];
  colleges: { value: string; label: string }[];
  selectedType: EventType | 'all';
  selectedCollege: string;
  onTypeChange: (value: EventType | 'all') => void;
  onCollegeChange: (value: string) => void;
  onReset: () => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({
  eventTypes,
  colleges,
  selectedType,
  selectedCollege,
  onTypeChange,
  onCollegeChange,
  onReset
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 space-y-2">
          <label className="text-sm font-medium text-gray-700">Event Type</label>
          <Select 
            value={selectedType} 
            onValueChange={(value) => onTypeChange(value as EventType | 'all')}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {eventTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 space-y-2">
          <label className="text-sm font-medium text-gray-700">College</label>
          <Select 
            value={selectedCollege} 
            onValueChange={onCollegeChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select college" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Colleges</SelectItem>
              {colleges.map((college) => (
                <SelectItem key={college.value} value={college.value}>
                  {college.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          variant="outline" 
          onClick={onReset}
          className="flex items-center space-x-1"
        >
          <Filter className="h-4 w-4 mr-1" />
          <span>Reset</span>
        </Button>
      </div>
    </div>
  );
};

export default EventFilters;
