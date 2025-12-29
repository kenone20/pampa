
import React, { useState } from 'react';
import { generateTripIdeas } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Sparkles, Send, MessageSquare, Compass, Users, Bot } from 'lucide-react';

const GeminiTripPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateTripIdeas(input);
    const modelMsg: ChatMessage = { role: 'model', content: responseText || "I'm sorry, I couldn't process that." };
    
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 max-w-4xl mx-auto my-12 border border-slate-100">
      <div className="p-10 border-b border-slate-50 bg-slate-50/30">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-200">
                    <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">AI Trip Planner</h3>
                    <p className="text-slate-500 text-xs font-medium">Powered by 30 Years of Expertise</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Always Active</span>
            </div>
        </div>
      </div>

      <div className="h-[500px] overflow-y-auto p-10 space-y-8 bg-white scrollbar-thin scrollbar-thumb-slate-200">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-slate-300 space-y-6">
            <Compass className="w-16 h-16 opacity-10" />
            <div className="text-center max-w-xs">
                <p className="text-slate-500 font-bold mb-2">How can we help you explore Morocco?</p>
                <p className="text-xs text-slate-400">Try: "Best 7-day itinerary for a family in October" or "Luxury camps in Merzouga"</p>
            </div>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-[2rem] px-8 py-5 shadow-sm border ${
              msg.role === 'user' 
                ? 'bg-amber-600 text-white rounded-tr-none border-amber-500' 
                : 'bg-slate-50 text-slate-700 rounded-tl-none border-slate-100'
            }`}>
              <div className="flex items-center gap-2 mb-2 text-[9px] font-bold uppercase tracking-widest opacity-60">
                {msg.role === 'user' ? <Users className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                {msg.role === 'user' ? 'International Traveler' : 'Pampa Concierge'}
              </div>
              <p className="text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-50 rounded-2xl rounded-tl-none px-6 py-4 flex gap-2 border border-slate-100">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-10 bg-slate-50/50 border-t border-slate-50">
        <div className="flex gap-4">
          <div className="relative flex-1">
              <MessageSquare className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Where would you like to go?"
                className="w-full bg-white border border-slate-200 rounded-[2rem] pl-14 pr-6 py-5 text-slate-900 placeholder-slate-400 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all shadow-inner"
              />
          </div>
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-slate-900 hover:bg-amber-600 text-white font-bold px-10 py-5 rounded-[2rem] transition-all disabled:opacity-50 flex items-center gap-3 shadow-lg hover:shadow-amber-100 active:scale-95"
          >
            <Send className="w-5 h-5" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiTripPlanner;
