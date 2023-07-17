import { MainInput } from "./MainInput"
import { MainButton } from "./MainButton"
import { ResponseInput } from "./ResponseInput"
import { useState } from "react"
export function MainContainer(){
   const [valor, setValor] = useState('');
   const [valor_main, setValor2] = useState('');
   function setValores(){
     setValor(""); setValor2("") 
   }
   const shortenLink = async(url) => {
      await fetch('https://api-ssl.bitly.com/v4/shorten', {
         method: 'POST',
         headers: {
            'Authorization': 'Bearer 092d5ea1871748e710d63aa94a35d19e494fdcfc',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ "long_url": url})
      }).then(response => response.json())
      .then(data => setValor(data.link))
      
   }
   return(
      <div className="hover:scale-105  flex flex-col w-[800px] h-[450px] bg-white rounded-xl shadow-2xl items-center p-10 transition-all justify-between max-lg:w-[80%] dark:bg-slate-800">
         <h2 className="text-3xl text-gray-500 font-raleway dark:text-white">URL Shortener</h2>
         <MainInput valor={valor_main} whenChange={setValor2} type="URL"></MainInput>
         <div className="flex gap-5">
            <MainButton main onToggle={()=>shortenLink(valor_main)}>Short</MainButton>
            <MainButton onToggle={()=>setValores()}>Clear</MainButton>
         </div>
         <ResponseInput valor={valor} type="Response"></ResponseInput>
      </div>
   )
}
