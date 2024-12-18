import React from 'react';
import { Mic, MicOff, Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  isRecording: boolean;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onToggleRecording: () => void;
}

export default function ChatInput({
  input,
  isRecording,
  onInputChange,
  onSendMessage,
  onToggleRecording,
}: ChatInputProps) {
  return (
    <div className="border-t p-4">
      {isRecording && (
        <div className="mb-3 flex items-center justify-center space-x-2 text-red-500 animate-pulse">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <span className="text-sm font-medium">Recording...</span>
        </div>
      )}
      
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleRecording}
          className={`p-3 rounded-full transition-all duration-200 ${
            isRecording 
              ? 'bg-red-500 hover:bg-red-600 shadow-lg scale-110' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {isRecording ? (
            <MicOff className="w-5 h-5 text-white" />
          ) : (
            <Mic className="w-5 h-5 text-gray-600" />
          )}
        </button>
        
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Ask your question..."
            className="w-full border rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
          />
          
          <button
            onClick={onSendMessage}
            className="absolute right-1 top-1 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}