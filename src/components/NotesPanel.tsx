import React, { useState } from 'react';
import { PenSquare, Save, Trash2, Tag } from 'lucide-react';
import { Note, SubjectTag, SUBJECT_TAGS } from '../types';
import { formatDate } from '../utils/dateUtils';

interface NotesPanelProps {
  notes: Note[];
  onSaveNote: (content: string, subject: SubjectTag) => void;
  onDeleteNote: (id: string) => void;
}

export default function NotesPanel({ notes, onSaveNote, onDeleteNote }: NotesPanelProps) {
  const [newNote, setNewNote] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectTag>('Other');
  const [filterSubject, setFilterSubject] = useState<SubjectTag | 'All'>('All');

  const handleSaveNote = () => {
    if (newNote.trim()) {
      onSaveNote(newNote, selectedSubject);
      setNewNote('');
    }
  };

  const filteredNotes = filterSubject === 'All' 
    ? notes 
    : notes.filter(note => note.subject === filterSubject);

  const getSubjectColor = (subject: string) => {
    const colors: Record<SubjectTag, string> = {
      'Mathematics': 'bg-blue-100 text-blue-800',
      'Physics': 'bg-purple-100 text-purple-800',
      'Chemistry': 'bg-green-100 text-green-800',
      'Biology': 'bg-yellow-100 text-yellow-800',
      'Literature': 'bg-pink-100 text-pink-800',
      'History': 'bg-orange-100 text-orange-800',
      'Computer Science': 'bg-indigo-100 text-indigo-800',
      'Languages': 'bg-red-100 text-red-800',
      'Other': 'bg-gray-100 text-gray-800'
    };
    return colors[subject as SubjectTag] || colors.Other;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-[600px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <PenSquare className="w-5 h-5" />
          Study Notes
        </h3>
      </div>

      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value as SubjectTag)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {SUBJECT_TAGS.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Take notes during your session..."
          className="w-full h-24 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSaveNote}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Save className="w-4 h-4" />
          Save Note
        </button>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">Filter by subject:</span>
        </div>
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value as SubjectTag | 'All')}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Subjects</option>
          {SUBJECT_TAGS.map((subject) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {filteredNotes.map((note) => (
          <div key={note.id} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500">
                  {formatDate(note.timestamp)}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full inline-flex items-center w-fit ${getSubjectColor(note.subject)}`}>
                  {note.subject}
                </span>
              </div>
              <button
                onClick={() => onDeleteNote(note.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}