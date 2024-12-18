export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface Note {
  id: string;
  content: string;
  timestamp: number;
  subject: string;
}

export type SubjectTag = 
  | 'Mathematics'
  | 'Physics'
  | 'Chemistry'
  | 'Biology'
  | 'Literature'
  | 'History'
  | 'Computer Science'
  | 'Languages'
  | 'Other';

export const SUBJECT_TAGS: SubjectTag[] = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Literature',
  'History',
  'Computer Science',
  'Languages',
  'Other'
];