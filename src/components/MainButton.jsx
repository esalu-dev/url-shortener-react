
export function MainButton({children, main=false, onToggle}){
   
   const color = main ? "bg-teal-500 hover:bg-teal-700 active:bg-teal-300" : "bg-gray-500 hover:bg-gray-700 active:bg-gray-300"
   return(
      <button onClick={onToggle} className={`text-white ${color} font-raleway rounded-sm px-3 py-1 max-sm:px-6 max:py-4 transition-colors active:transition-none`}>{children}</button>

   )
}