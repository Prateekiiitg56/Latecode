import { X, Send, Sparkles, Code2, BookOpen, Lightbulb } from 'lucide-react';
import { useState } from 'react';

export default function AIHintsPanel({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Hi! I am your AI assistant. Stuck on Two Sum?' }
    ]);
    const [input, setInput] = useState('');

    if (!isOpen) return null;

    const quickActions = [
        { label: 'Give me a hint', icon: Lightbulb },
        { label: 'Explain HashMap in Python', icon: BookOpen },
        { label: 'Review my code', icon: Code2 },
        { label: 'Syntax: for loop in Java', icon: BookOpen },
    ];

    return (
        <div className="absolute right-0 top-0 h-full w-[400px] bg-editor-dark/95 backdrop-blur-md border-l border-subtle-line z-50 flex flex-col shadow-2xl transition-transform transform translate-x-0 font-ui text-body-text">

            {/* Header */}
            <div className="h-16 border-b border-subtle-line flex items-center justify-between px-6 bg-raised-dark shrink-0">
                <div className="flex items-center gap-3">
                    <div className="bg-accent-secondary/20 p-2 rounded-lg border border-accent-secondary/30">
                        <Sparkles size={18} className="text-accent-secondary" />
                    </div>
                    <div>
                        <h2 className="font-display font-bold text-white leading-tight">AI Assistant</h2>
                        <p className="text-xs text-muted-text font-code">Problem: Two Sum</p>
                    </div>
                </div>
                <button onClick={onClose} className="text-muted-text hover:text-white transition-colors bg-[#11161d] p-2 border border-subtle-line rounded-lg">
                    <X size={16} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[85%] rounded-xl p-3 border text-sm ${m.role === 'ai'
                                ? 'bg-raised-dark border-subtle-line text-body-text'
                                : 'bg-accent-secondary/10 border-accent-secondary/30 text-white'
                            }`}>
                            {m.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 flex flex-col gap-2 border-t border-subtle-line bg-[#0a0a0f]">
                <div className="grid grid-cols-2 gap-2 mb-2">
                    {quickActions.map((action, i) => {
                        const Icon = action.icon;
                        return (
                            <button
                                key={i}
                                className="flex items-center gap-2 text-xs bg-editor-dark hover:bg-raised-dark border border-subtle-line text-muted-text hover:text-white px-2.5 py-2 rounded-lg transition-colors text-left"
                                onClick={() => setInput(action.label)}
                            >
                                <Icon size={12} className="text-accent-primary" />
                                <span className="truncate">{action.label}</span>
                            </button>
                        )
                    })}
                </div>

                {/* Input */}
                <div className="relative">
                    <textarea
                        className="w-full bg-raised-dark border border-subtle-line rounded-xl pl-4 pr-12 py-3 text-sm text-body-text placeholder-muted-text focus:outline-none focus:border-accent-secondary resize-none h-14 font-ui shadow-inner"
                        placeholder="Type your question..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-void-black bg-accent-primary p-2 rounded-lg hover:brightness-110 transition-all shadow-[0_0_10px_rgba(0,255,135,0.3)]">
                        <Send size={15} />
                    </button>
                </div>
            </div>

        </div>
    );
}
