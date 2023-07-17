export function DarkModeButton(onToggle){
   return(
      <button onClick={()=>onToggle.onToggle()} className="font-bold text-xl w-12 h-12 rounded-full fixed bg-white dark:bg-slate-800 text-slate-800 dark:text-white right-[2%] top-[3%] flex justify-center items-center hover:scale-105 transition-all active:scale-95"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
</button>
   )
}
