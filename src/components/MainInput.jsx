
export function MainInput({type, valor, whenChange}){
   return(
      <input type="text" value={valor} onChange={ev=>whenChange(ev.target.value)} placeholder={type} className="rounded-sm font-raleway border-2 w-[80%] h-10 p-2 focus:outline-teal-500 text-gray-700 max-sm:w-full dark:bg-slate-700 dark:text-gray-400 transition-all"></input>
       
   )
}