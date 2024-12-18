import React from 'react';
import Header from './components/Header';
import VoiceChat from './components/VoiceChat';
import NotesPanel from './components/NotesPanel';
import { useNotes } from './hooks/useNotes';

export default function App() {
  const { notes, addNote, deleteNote } = useNotes();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Personal AI Tutor
          </h2>
          <p className="text-lg text-gray-600">
            Get instant help with your homework and learn faster with our AI-powered tutor.
            Just speak or type your questions!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VoiceChat />
          </div>
          <div className="lg:col-span-1">
            <NotesPanel
              notes={notes}
              onSaveNote={addNote}
              onDeleteNote={deleteNote}
            />
          </div>
        </div>
          
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Get help anytime, anywhere with our AI tutor</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">All Subjects</h3>
            <p className="text-gray-600">From math to literature, we've got you covered</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Voice Enabled</h3>
            <p className="text-gray-600">Speak naturally with our AI tutor</p>
          </div>
        </div>
      </main>
    </div>
  );
}