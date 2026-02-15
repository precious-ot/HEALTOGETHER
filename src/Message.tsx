import { useState } from "react";



export default function Message() {
  const [menu, setMenu] = useState(false);
    return(
        <div className="h-screen flex">
          <div className={`flex flex-col border-r-1 border-neutral-100 bg-white w-auto sm:w-80 ${menu ? 'block fixed top-16 md:hidden left-0 h-screen z-80' : 'hidden md:block'}`}>
            <div className="px-4 py-5 border-b-1 border-neutral-100">
             <h1 className="text-xl font-bold text-[#5d4e37] text-start">
             <span> Messages</span>
             <i className="bi bi-x-lg float-right text-xl cursor-pointer md:hidden" onClick={() => setMenu(!menu)}></i>
              </h1>
             <div className="mt-5 flex place-items-center gap-2 border-1 px-3 border-neutral-300 rounded-md">
                <i className="bi bi-search text-sm text-neutral-400"></i>
              <input type="text" placeholder="Search conversations..." className="w-full text-sm px-3 py-2 focus:outline-none" />
             </div>
            </div>
            <div className="h-full grid place-items-center justify-center gap-0">
                <div className="grid place-items-center">
                    <i className="bi bi-chat-left text-6xl text-[#d4a574] opacity-40 mt-10 mx-auto"></i>
                <h1 className="text-center text-md text-[#5d4e37] mt-5 font-semibold">No conversations yet.</h1>
               <p className="text-center text-sm text-neutral-500 mt-2 px-5">Connect with community members to start meaningful conversations.</p>
                <button className="mt-4 text-sm place-items-center gap-2 bg-linear-to-r from-[#d4a574] to-[#b8956a] text-white px-4 py-2 rounded-md hover:shadow-lg flex">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-users w-4 h-4 mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75">
                    </path></svg>
                    <span>Find Support Buddies</span>
                    </button>
                </div>
            </div>
          </div>
          <div className="place-content-center text-[#d4a574] place-items-center bg-[#fdf8f3] flex-1">
            <div className={`absolute top-20 left-10 md:hidden ${menu ? 'hidden' : 'block'}`}>
              <i className="bi bi-list text-3xl font-bold" onClick={() => setMenu(!menu)}></i>
            </div>
            <div className="grid justify-center">
                 <i className="bi bi-chat-left text-6xl stroke-3 text-[#d4a574] opacity-40"></i>
            </div>
           <h3 className="text-xl font-bold text-[#5d4e37] text-center mt-5">Welcome to Messages</h3>
           <p className="px-5 text-center text-[#5d4e37] max-w-xl opacity-60 mt-2">This is your safe space for private, one-on-one conversations with community members who understand your journey.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <div className="text-[#d4a574] bg-white p-4 w-50 rounded-lg border-1 border-neutral-200">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square w-8 h-8 mx-auto mb-2" >
             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
             <h3 className="text-center text-sm font-semibold text-[#5d4e37]">Text Chat</h3>
             <p className="text-center text-xs text-[#5d4e37] opacity-60 mt-1">Secure messaging</p>
            </div>
            <div className="text-[#d4a574] bg-white p-4 w-50 rounded-lg border-1 border-neutral-200">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-video w-8 h-8 mx-auto mb-2" ><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
             <h3 className="text-center text-sm font-semibold text-[#5d4e37]">Video Calls</h3>
             <p className="text-center text-xs text-[#5d4e37] opacity-60 mt-1">Face-to-face support</p>  
          </div>
          </div>
          </div>
        </div>
    );
}