import React from "react"

type BaseProp = {
 title: string
 description: string
}
type SupportProp = BaseProp & {
    icon: React.ReactNode   
    members: number
    type: string
}
 
 type CommunityProp = BaseProp & {
    icon: React.ReactNode
    className: string
 }

 type PostProp = BaseProp & {
    type: string
    logo: string
    event: string
    plans1: string
    plans2: string
    views: number
 }

 export function Post({title, type, description, logo, event, plans1, plans2, views}: PostProp) {
    return(
        <div className="bg-[#FDF8F3] px-5 py-5 rounded-lg mt-5 border-1 border-neutral-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:shadow-lg">
            <div className="flex gap-3 text-[#5d4e37] text-start">
                <div className="bg-[#c4a484] w-10 h-10 text-white grid place-items-center rounded-full">{logo}</div>
                <div>
                    <h1 className="text-sm font-semibold">{type}</h1>
                    <div className="flex place-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-3 h-3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span className="text-xs ">Aug 24, 1:11 PM</span>
                    </div>
                </div>
            </div>
            <h1 className="text-lg font-semibold text-start text-[#5d4e37] mt-4">{title}</h1>
            <p className="text-[#5d4e37] text-sm text-start opacity-60 mt-3">{description}</p>
            <div className="grid grid-cols-1 gap-2 sm:flex mt-3">
                <div className="flex gap-2 sm:gap-4 grow-1 text-[#D4A574] text-sm">
                <span>{event}</span>
                <span>{plans1}</span>
                <span>{plans2}</span>
                </div>
                <div className="flex gap-4">
                    <div className="flex place-items-center gap-2 text-[#5d4e37] text-xs opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                        <span className="text-[#5d4e37] opacity-60 ">{views}</span>
                    </div>
                    <div className="flex place-items-center gap-1 text-[#5d4e37] text-xs opacity-60">
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                     <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                    <span className="text-[#5d4e37] opacity-60 ">View</span>
                    </div>
                </div>
            </div>
        </div>
    );
 }

 export function Media({icon, title, description, className}: CommunityProp) {
    return(
        <div className="bg-white w-auto text-[#5d4e37] grid place-items-center py-3 px-5 rounded-3xl border-1 border-neutral-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:shadow-lg">
            <div className={className}>{icon}</div>
            <h1 className="font-semibold text-[14px] ">{title}</h1>
            <p className="text-[13px] opacity-60 mt-">{description}</p>
        </div>
    );
 }

 export function Support({icon, title, type, description, members}: SupportProp){
    return(
        <div className="bg-[#f0e6d6] px-4 py-5 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-103 hover:shadow-lg">
        <div className="flex gap-3 place-items-center">
            <div className="grid place-items-center h-10 w-10 rounded-xl text-[#e8b4a0] mb-5 bg-[#e8b4a030]">{icon}</div>
        <div>
            <h1 className="text-[#5d4e37] font-semibold text-sm">{title}</h1>
            <div className="flex place-items-center text-[#5d4e37] gap-3 mt-1">
                <span className="px-2 py-2 rounded-full bg-[#e8b4a030] font-medium text-[12px]">{type}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
                </svg>
            </div>
        </div>
        </div>
        <p className="text-[#5d4e37] opacity-60 mt-3 text-start text-[14px]">{description}...</p>
        <div className="flex mt-2">
            <div className="flex place-items-center text-[#5d4e37] gap-1 opacity-60 grow-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-3 h-3" data-filename="components/dashboard/CommunityGroups" data-linenumber="124" data-visual-selector-id="components/dashboard/CommunityGroups124" data-source-location="components/dashboard/CommunityGroups:124:22" data-dynamic-content="false"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75">
                </path></svg>
                <span className="text-xs">{members} members</span></div>
            <button className="px-2 py-2 hover:bg-white hover:rounded-lg text-[#d4a574]">Join</button>
        </div>
        </div>
    );
 }

export default function Community(){
    return(
        <div className="bg-[#fdf8f3] px-5 py-10">
            <div className="grid place-items-center justify-center">
              <h1 className="text-[#5d4e37] text-4xl font-bold text-center">Welcome to Your Healing Journey</h1>
              <p className="text-[#5d4e37] opacity-60 text-lg text-center mt-3 max-w-2xl">Connect with others who understand your experience. Share, listen, and heal together in a safe, supportive community.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                <Media className="grid place-items-center h-13 w-13 rounded-2xl text-white mb-5 bg-linear-to-r from-[#d4a574] to-[#b8956a]"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
                 <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  </svg>} 
                title="Start Conversation" description="Share what's on your mind"/>
                <Media className="grid place-items-center h-13 w-13 rounded-2xl text-white mb-5 bg-linear-to-r from-[#e8b4a0] to-[#e6c2a6]"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                </svg>} 
                title="Find Support Buddy" description="Connect one-on-one"/>
                <Media className="grid place-items-center h-13 w-13 rounded-2xl text-white mb-5 bg-linear-to-r from-[#c4a484] to-[#f2d7c7]"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                </svg>} 
                title="Join Video Chat" description="Group support session"/>
                <Media className="grid place-items-center h-13 w-13 rounded-2xl text-white mb-5 bg-linear-to-r from-[#e6c2a6] to-[#d4a574]"
                 icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                 <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                 </svg>}
                 title="Browse Resources" description="Helpful tools & guides"/>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 grid gap-5">
                    <div className="bg-white border-1 border-neutral-100 px-4 py-10 rounded-2xl border-1 border-neutral-100 shadow-sm">
                    <div className="flex">
                        <h1 className="flex gap-2 place-items-center text-[#5d4e37] font-semibold text-lg sm:text-2xl grow-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" strokeWidth={0.2} stroke="currentColor" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                       <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                       </svg>
                       <span>Support Communities</span>
                        </h1>
                        <button className="flex place-items-center gap-2 text-white rounded-lg px-3 py-2 bg-linear-to-r from-[#d4a574] to-[#b8956a]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                            <span className="font-semibold text-sm sm:text-base">Join Group</span></button>
                    </div>
                    <div className="mt-5 grid sm:grid-cols-2 gap-4">
                        <Support icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>}
                         title="Grief & Loss Support Circle"
                         type="Grief Loss"
                         description="A safe space for those navigating the complex journey of loss. Share"
                         members={47}/>
                        
                        <Support icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>}
                         title="Chronic Strength Community"
                         type="Chronic Illness"
                         description="Living with chronic illness brings unique challenges. Connect with others"
                         members={56}/>

                         <Support icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className="bi bi-person-x" viewBox="0 0 16 16">
                           <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                           <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                           </svg>}
                         title="Survivors United"
                         type="Abuse Survivor"
                         description="A supportive community for abuse survivors to connect, heal, and reclaim"
                         members={34}/>

                         <Support icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                          stroke-linejoin="round" className="lucide lucide-brain w-5 h-5" data-filename="components/dashboard/CommunityGroups" data-linenumber="98" data-visual-selector-id="components/dashboard/CommunityGroups98" data-source-location="components/dashboard/CommunityGroups:98:22" data-dynamic-content="false"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516">
                         </path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>}
                         title="Mental Health Allies"
                         type="Mental Health"
                         description="Open conversations about mental health challenges, treatment, and daily"
                         members={89}/>

                         <Support icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield" viewBox="0 0 16 16">
                          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                           </svg>}
                         title="Recovery Warriors"
                         type="Addiction Recovery"
                         description="Supporting each other through addiction recovery. Share victories,"
                         members={23}/>
                    </div>
                </div>
                    <div className="py-10 px-4 sm:px-8 bg-white text-[#5d4e37] rounded-2xl border-1 border-neutral-100 shadow-sm">
                        <div className="flex place-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle w-5 h-5"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z">
                            </path></svg>
                            <h1 className="flex gap-2 place-items-center text-[#5d4e37] font-semibold text-2xl grow-1">Recent Community Posts</h1>
                            </div>
                            <div>
                                <Post type="Anonymous" 
                                title="Anniversary of my loss approaching" 
                                logo="A" 
                                description="The one-year anniversary of losing my partner is coming up next week. I thought I was doing better, but I'm finding myself struggling again. Has anyone else experienced this? How did you get through the difficult anniversary dates?" 
                                event="anniversary" 
                                plans1="grief_waves" 
                                plans2="partner_loss"
                                views={12}
                                />

                                <Post type="Community Member" 
                                title="Anniversary of my loss approaching" 
                                logo="U" 
                                description="90 days clean today. Some days are still really hard, but I'm learning to celebrate the small victories. Grateful for this community that understands the daily choice to stay in recovery." 
                                event="milestone" 
                                plans1="90_days" 
                                views={8}
                                plans2="gratitude"/>

                                <Post type="Anonymous" 
                                title="Starting therapy soon - feeling nervous" 
                                logo="A" 
                                description="After putting it off for months, I finally made an appointment with a therapist. My first session is tomorrow and I'm incredibly anxious. What should I expect? Any tips for making the most of therapy?" 
                                event="therapy" 
                                plans1="anxiety" 
                                views={15}
                                plans2="first_time"/>

                                <Post type="Anonymous" 
                                title="Starting therapy soon - feeling nervous" 
                                logo="A" 
                                description="Bad flare day today. Sometimes I feel like people don't understand that just because I look okay doesn't mean I'm not in pain. This community helps me feel less alone with the invisible struggle." 
                                event="flare" 
                                plans1="invisible_illness" 
                                views={6}
                                plans2="support"/>
                            </div>
                    </div>
                </div>
                <div className="flex gap-5 flex-col w-full">
                    <div className="py-8 px-8 bg-white w-full rounded-2xl border-1 border-neutral-100 shadow-sm">
                        <h1 className="text-[#5d4e37] font-semibold text-xl text-start">Community Impact</h1>
                    <div className="grid grid-rows-3 gap-5 mt-3">
                        <div className="flex gap-6 place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#d4a574" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75">
                                </path></svg>
                                <div className="text-start">
                                    <h1 className="text-[#5d4e37] font-bold text-lg">2,847</h1>
                                    <span className="text-[#5d4e37] opacity-60 text-sm">Active Members</span>
                                </div>
                    </div>
                    <div className="flex gap-6 place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#d4a574" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75">
                                </path></svg>
                                <div className="text-start">
                                    <h1 className="text-[#5d4e37] font-bold text-lg">2,847</h1>
                                    <span className="text-[#5d4e37] opacity-60 text-sm">Active Members</span>
                                </div>
                    </div>
                    <div className="flex gap-6 place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#d4a574" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75">
                                </path></svg>
                                <div className="text-start">
                                    <h1 className="text-[#5d4e37] font-bold text-lg">2,847</h1>
                                    <span className="text-[#5d4e37] opacity-60 text-sm">Active Members</span>
                                </div>
                    </div>
                        </div>
                    </div>
                    <div className="grid gap-4 py-8 w-full px-8 bg-white rounded-2xl border-1 border-neutral-100 shadow-sm">
                       <div className="flex place-items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4a574" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                        </path></svg>
                        <h1 className="text-[#5d4e37] font-semibold text-2xl">Crisis Support</h1>
                       </div>
                       <div className="bg-[#f5efe7] py-3 px-4 rounded-lg text-start">
                           <p className="text-[#5d4e37] font-medium">Crisis Text Line</p>
                           <span className="text-[#5d4e37] text-sm opacity-60">Text HOME to 741741</span>
                       </div>
                       <div className="bg-[#f5efe7] py-3 px-4 rounded-lg text-start">
                           <p className="text-[#5d4e37] font-medium">National Suicide Prevention</p>
                           <span className="text-[#5d4e37] text-sm opacity-60">Call or Text 988</span>
                       </div>
                       <button className="text-[#d4a574] border-1 border-neutral-200 hover:bg-neutral-100 rounded-lg py-2 px-4 mt-3">More Resources</button>
                    </div>
                </div>
            </div>
        </div>
    )
}