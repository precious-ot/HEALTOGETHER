import React from "react"

type OffcanvasProp = {
   community: boolean
   resources: boolean
   message: boolean
   profile: boolean
   handleCommunity: () => void
   handleResources: () => void
   handleMessage: () => void
   handleProfile: () => void
   className: string
}


export default function Offcanvas({community, className, resources, message, profile, handleCommunity, handleMessage, handleProfile, handleResources}: OffcanvasProp) {
    return(
        <div className={className}>
                <div className="flex gap-3 bg-white place-items-center pb-5 px-5 py-5 border-r-1 border-[#f0e6d6]">
            <div className="grow-1">
                <div className="w-10 h-10 grid place-items-center rounded-full text-white bg-[#d4a574]">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
            </div>
            </div>
            <div className="text-start">
               <h1 className="text-xl font-semibold text-[#5d4e37]">HealTogether</h1>
               <ul>
                <li className="inline text-sm text-[#5d4e37] opacity-60 ">Support </li>
                <li className="inline text-sm text-[#5d4e37] opacity-60">• Connection </li>
                <li className="inline text-sm text-[#5d4e37] opacity-60">• Healing </li>
               </ul>
            </div>       
            </div>
              
            <div className="pt-8 bg-[#f0e6d6] h-full flex flex-col justify-between">
            <div className="px-4">
                <h1 className="text-[13px] font-semibold text-neutral-500 text-start px-3 text-[#5d4e37] opacity-60">CONNECT & HEAL</h1>
            <ul className="ps-4 mt-2">
                <li>
                    <a onClick={handleCommunity} className={`flex place-items-center gap-3 cursor-pointer text-[#5d4e37] px-3 py-2 hover:bg-[#f0e6d6] hover:rounded-full hover:shadow-md mb-2 ${community ? "bg-linear-to-r from-[#d4a574] to-[#b8956a] text-white rounded-full shadow-md" : "bg-black-950"}`}>                       
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  stroke="currentColor"  fill="currentColor"  className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                         </svg>                      
                        <span className="font-semibold text-sm">Community</span></a>
                         </li>
                <li>
                    <a onClick={handleMessage} className={`flex place-items-center gap-3 cursor-pointer text-[#5d4e37] px-3 py-2 hover:bg-[#f0e6d6] hover:rounded-full hover:shadow-md mb-2 ${message ? "bg-linear-to-r from-[#d4a574] to-[#b8956a] text-white rounded-full shadow-md" : "bg-black-950"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" stroke="currentColor" fill="currentColor" className="bi bi-chat-left " viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        </svg>
                        <span className="font-semibold text-sm">Messages</span></a>
                </li>
                <li>
                    <a onClick={handleResources} className={`flex place-items-center gap-3 cursor-pointer text-[#5d4e37] px-3 py-2 hover:bg-[#f0e6d6] hover:rounded-full hover:shadow-md mb-2 ${resources ? "bg-linear-to-r from-[#d4a574] to-[#b8956a] text-white rounded-full shadow-md" : "bg-black-950"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" stroke="currentColor" fill="currentColor" className="bi bi-book " viewBox="0 0 16 16">
                         <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                       </svg>
                        <span className="font-semibold text-sm">Resources</span></a>
                </li>
                <li>
                    <a onClick={handleProfile} className={`flex place-items-center gap-3 cursor-pointer text-[#5d4e37] px-3 py-2 hover:bg-[#f0e6d6] hover:rounded-full hover:shadow-md mb-2 ${profile ? "bg-linear-to-r from-[#d4a574] to-[#b8956a] text-white rounded-full shadow-md" : "bg-black-950"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" stroke="currentColor" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                        </svg>
                        <span className="font-semibold text-sm">Profile</span></a>
                </li>
            </ul>
                </div>        
            <div className="px-4">
                <h1 className="text-[13px] font-semibold text-[#5d4e37] opacity-60 text-start px-3 uppercase">Crisis Support</h1>
              <div className="bg-[#f2d7c7] flex flex-cols px-2 py-3 gap-2 rounded-lg mt-3">
                <div className="text-[#e8b4a0] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" stroke="" fill="currentColor" className="bi bi-shield" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                </svg>
                </div>
                <div>
                    <h1 className="text-sm text-start text-[#5d4e37] opacity-70">Need immediate help?</h1>
                    <p className="text-[12px] text-start text-[#5d4e37] opacity-50 mt-1">Crisis Text Line: Text HOME to 741741 National Suicide Prevention: 988</p>
                </div>
              </div>
            </div>
            <div className="flex py-3 gap-3 px-4 border-t-1 border-neutral-100">
              <div className="text-lg text-white font-semibold w-8 h-8 rounded-full grid place-items-center bg-linear-to-r from-[#c4a484] to-[#e6c2a6]">
                <span>U</span></div>
                <div className="text-start">
                    <h1 className="text-sm text-[#5d4e37] opacity- font-semibold">Your Journey</h1>
                    <p className="text-sm text-[#5d4e37] opacity-60">You're not alone ❤️</p>
                </div>
            </div>
            </div>  
        </div>
    )
}