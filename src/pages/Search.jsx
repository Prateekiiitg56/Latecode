import { Search as SearchIcon, PlayCircle, Tag } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

const mockProblems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', tags: ['Array', 'Hash Table'], status: 'solved' },
    { id: 2, title: 'Add Two Numbers', difficulty: 'Medium', tags: ['Linked List', 'Math'], status: 'unsolved' },
    { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', tags: ['Hash Table', 'String', 'Sliding Window'], status: 'unsolved' },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', tags: ['Array', 'Binary Search', 'Divide and Conquer'], status: 'attempted' },
];

export default function Search({ setActivePanel }) {
    const [query, setQuery] = useState('');

    return (
        <div className="flex-1 flex flex-col h-[calc(100vh-56px)] overflow-y-auto bg-void-black text-body-text px-8 py-8 items-center scrollbar-hide">

            <div className="w-full max-w-4xl flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-10 w-full space-y-4">
                    <h1 className="text-4xl font-display font-bold tracking-tight text-white mb-2">
                        Find your next challenge.
                    </h1>
                    <p className="text-muted-text max-w-lg mx-auto font-ui text-lg">
                        Search by problem name, number, algorithms, or tag. Dense information. Zero fluff.
                    </p>
                </div>

                {/* Search Input */}
                <div className="relative w-full mb-12 group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <SearchIcon className="h-6 w-6 text-muted-text group-hover:text-accent-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full h-16 pl-12 pr-4 py-4 border-2 border-subtle-line rounded-xl leading-5 bg-editor-dark text-white placeholder-muted-text focus:outline-none focus:ring-0 focus:border-accent-primary hover:border-raised-dark transition-all text-lg font-ui shadow-lg"
                        placeholder="e.g. 'Dynamic Programming' or 'Two Sum'"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {/* Results List */}
                <div className="w-full space-y-4">
                    <div className="flex justify-between text-sm font-semibold text-muted-text px-4 mb-2 tracking-wider">
                        <div className="w-16">STATUS</div>
                        <div className="flex-1">PROBLEM</div>
                        <div className="w-24 text-center">DIFFICULTY</div>
                        <div className="w-1/3">TAGS</div>
                        <div className="w-24 text-right">ACTION</div>
                    </div>

                    <div className="flex flex-col gap-3">
                        {mockProblems.map((p) => (
                            <div key={p.id} className="group flex items-center justify-between bg-editor-dark hover:bg-raised-dark border border-subtle-line hover:border-accent-secondary/50 rounded-xl p-4 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]">

                                {/* Status Indicator */}
                                <div className="w-16 flex justify-center">
                                    {p.status === 'solved' ? (
                                        <div className="w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(0,255,135,0.6)]" title="Solved" />
                                    ) : p.status === 'attempted' ? (
                                        <div className="w-3 h-3 rounded-full bg-med-diff shadow-[0_0_8px_rgba(240,165,0,0.6)]" title="Attempted" />
                                    ) : (
                                        <div className="w-3 h-3 rounded-full border border-muted-text" title="Unsolved" />
                                    )}
                                </div>

                                {/* Title */}
                                <div className="flex-1 font-display font-semibold flex items-center gap-3">
                                    <span className="text-muted-text font-code text-sm">#{p.id}</span>
                                    <span className="text-white group-hover:text-accent-primary transition-colors cursor-pointer" onClick={() => setActivePanel('editor')}>
                                        {p.title}
                                    </span>
                                </div>

                                {/* Difficulty */}
                                <div className="w-24 flex justify-center">
                                    <span className={cn(
                                        "px-2.5 py-1 rounded text-xs font-bold font-code",
                                        p.difficulty === 'Easy' && "text-easy-diff bg-easy-diff/10",
                                        p.difficulty === 'Medium' && "text-med-diff bg-med-diff/10",
                                        p.difficulty === 'Hard' && "text-hard-diff bg-hard-diff/10"
                                    )}>
                                        {p.difficulty}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="w-1/3 flex flex-wrap gap-2">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="flex items-center gap-1 text-xs text-muted-text bg-[#1c2128] px-2 py-1 rounded border border-subtle-line group-hover:border-subtle-line/80 font-code">
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action */}
                                <div className="w-24 flex justify-end">
                                    <button onClick={() => setActivePanel('editor')} className="text-muted-text hover:text-white group-hover:text-accent-primary bg-raised-dark hover:bg-accent-primary/10 border border-subtle-line hover:border-accent-primary p-2 rounded-lg transition-all">
                                        <PlayCircle size={20} />
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
