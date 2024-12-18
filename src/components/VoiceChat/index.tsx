import React from 'react';

export default function VoiceChat() {
  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900">AI Tutor Chat</h3>
        <p className="text-sm text-gray-500">Ask questions by voice or text</p>
      </div>

      <div className="flex-1 relative">
        <iframe 
          id="audio_iframe"
          src="https://widget.synthflow.ai/widget/v2/1734349184960x839863704572616100/1734349184710x724994012961053300"
          allow="microphone"
          className="w-full h-full absolute inset-0 border-none bg-transparent"
          style={{ pointerEvents: 'auto' }}
        />
      </div>
    </div>
  );
}