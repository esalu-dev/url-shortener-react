function MainHeader(){
   return(
      <>
         <header className="flex justify-between px-8 py-5 text-lg font-medium">
            <div className="text-2xl">E S A L U</div>
            <div>
               <ul className="flex gap-8">
                  <li><a href="#">About Me</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Skills</a></li>
                  <li><a href="#" className="bg-teal-600 text-white px-3 py-2 rounded-2xl">Contact Me</a></li>
               </ul>
            </div>
         </header>
      </>
   )
}
export default MainHeader