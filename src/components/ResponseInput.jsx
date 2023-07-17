export function ResponseInput({type,valor}){
   return(
      <input type="text" value={valor} placeholder={type} className="rounded-sm max-sm:w-full font-raleway border-2 border-teal-500 w-[80%] h-10 p-2 focus:outline-teal-500 text-gray-700 dark:bg-slate-700 dark:text-gray-400 transition-all"/>
   )
}
