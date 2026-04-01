import { Home, ListTodo, Flame, Code2, Lightbulb } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const navItems = [
    { id: 'search', icon: ListTodo, label: 'Search Problems' },
    { id: 'my-questions', icon: Home, label: 'My Dashboard' },
    { id: 'streak', icon: Flame, label: 'Streak & Heatmap' },
    { id: 'editor', icon: Code2, label: 'Code Editor' },
    { id: 'ai-hints', icon: Lightbulb, label: 'AI Assistant' },
];

export default function Sidebar({ activePanel, setActivePanel }) {
    return (
        <div className="w-12 h-screen flex flex-col items-center py-4 bg-editor-dark border-r border-subtle-line flex-shrink-0 z-10">
            <div className="text-accent-primary font-display font-bold text-xl mb-8">
                L
            </div>
            <div className="flex flex-col gap-6 flex-1 w-full">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePanel === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActivePanel(item.id)}
                            className={cn(
                                "relative group flex items-center justify-center w-full h-10 hover:text-white transition-colors",
                                isActive ? "text-accent-primary" : "text-muted-text"
                            )}
                            title={item.label}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent-primary rounded-r-md" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
