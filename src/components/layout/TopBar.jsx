import { Flame, CheckCircle2, ChevronRight } from 'lucide-react';

export default function TopBar({ activeLanguage, setLanguage }) {
    return (
        <header className="h-14 border-b border-subtle-line bg-editor-dark flex items-center justify-between px-6 z-10 shrink-0">
            <div className="flex items-center gap-4">
                <h1 className="text-body-text font-display font-bold tracking-tight select-none">
                    LATE<span className="text-accent-primary">CODE</span>
                </h1>
                <div className="h-5 w-px bg-subtle-line" />

                {/* Streak Pill */}
                <div className="flex items-center gap-1.5 bg-raised-dark px-3 py-1 rounded-full text-sm font-ui border border-subtle-line cursor-pointer hover:border-accent-secondary transition-colors">
                    <Flame size={16} className="text-med-diff" />
                    <span className="text-body-text font-medium">12 Day Streak</span>
                </div>

                {/* Today's Count */}
                <div className="flex items-center gap-1.5 bg-raised-dark px-3 py-1 rounded-full text-sm font-ui border border-subtle-line cursor-pointer hover:border-accent-primary transition-colors">
                    <CheckCircle2 size={16} className="text-accent-primary" />
                    <span className="text-body-text font-medium">3 Solved Today</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative">
                    <select
                        value={activeLanguage}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="appearance-none bg-raised-dark border border-subtle-line text-body-text font-ui text-sm rounded-md px-3 py-1.5 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary w-28 cursor-pointer"
                    >
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-text">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
        </header>
    );
}
