import { Linkedin, Mail } from 'lucide-react';

const btn = 'pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/70 px-3 py-1 text-[10px] font-medium text-white/80 backdrop-blur transition hover:border-ice hover:text-ice sm:text-xs';

/** Fixed credit watermark + contact buttons, visible on every page (including over the simulator tab). */
export default function Watermark() {
  return (
    <div aria-label="Credits" className="pointer-events-none fixed bottom-2 right-2 z-[70] max-w-[15rem] select-none text-right text-[9px] leading-snug text-white/45 sm:bottom-3 sm:right-4 sm:max-w-sm sm:text-[11px]">
      <p>Made by <span className="font-semibold text-white/70">Jose Francisco Gonçalves Junior</span></p>
      <p>Engineering student in Instrumentation, Automation and Robotics at UFABC</p>
      <p>Industrial Automation • CAD • Numerical Simulation • Python and C/C++</p>
      <div className="mt-1.5 flex justify-end gap-2">
        <a href="mailto:jun9nho@gmail.com" className={btn} aria-label="Send an email to Jose Francisco Gonçalves Junior"><Mail size={13} /> Email</a>
        <a href="https://www.linkedin.com/in/jfgonjr" target="_blank" rel="noopener noreferrer" className={btn} aria-label="Open LinkedIn profile"><Linkedin size={13} /> LinkedIn</a>
      </div>
    </div>
  );
}
