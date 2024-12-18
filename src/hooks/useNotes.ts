import { useState, useEffect } from 'react';
import { Note, SubjectTag } from '../types';

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('tutorinn_notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('tutorinn_notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (content: string, subject: SubjectTag) => {
    const newNote: Note = {
      id: Date.now().toString(),
      content,
      timestamp: Date.now(),
      subject,
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return { notes, addNote, deleteNote };
}