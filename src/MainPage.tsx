import React, { useState } from "react";
import Offcanvas from "./Offcanvas";
import Community from "./Community";
import Resources from "./Resources";
import Message from "./Message";
import Profile from "./Profile";

export default function MainPage() {
  const [community, setCommunity] = useState<boolean>(true);
  const [message, setMessage] = useState<boolean>(false);
  const [resources, setResources] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<boolean>(false)

  const handleCommunity = () => {
    setCommunity(true);
    setMessage(false);
    setProfile(false);
    setResources(false);
    setSideBar(false);
  }

  const handleResources = () => {
    setCommunity(false);
    setMessage(false);
    setProfile(false);
    setResources(true);
    setSideBar(false);
  }

  const handleMessage = () => {
    setCommunity(false);
    setMessage(true);
    setProfile(false);
    setResources(false);
    setSideBar(false);
  }

  const handleProfile = () => {
    setCommunity(false);
    setMessage(false);
    setProfile(true);
    setResources(false);
    setSideBar(false);
  }
    return(
      <div>
           <div className={`${sideBar ? "brightness-20" : "brightness-100"}`}>
        <div className="sticky top-0 lg:hidden bg-white flex place-items-center gap-3 z-50 py-4 px-5 text-[#5d4e37]">
          <button onClick={() => setSideBar(true)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-left"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18">
            </path></svg></button>
          <h1 className="text-2xl font-bold">HealTogether</h1>
          </div>
          <div className="flex lg:h-screen">
      <div className="flex h-screen">
           <Offcanvas  
           className="w-65 flex flex-col hidden lg:inline-flex"
        community={community} 
        profile={profile} 
        message={message} 
        resources={resources} 
        handleCommunity={handleCommunity}
        handleMessage={handleMessage}
        handleProfile={handleProfile}
        handleResources={handleResources}
        />
        </div>
        
        <div className="flex-1 lg:overflow-y-auto">
         {community && 
         <Community />
         }

         {resources &&
          <Resources />
         }

         {profile &&
          <Profile />
         }

         {message &&
          <Message />
         }
        
      </div>
      </div>
      
      </div>
      <Offcanvas  
           className={`w-65 flex flex-col hidden ${sideBar ? "inline-flex fixed top-0 left-0 h-screen z-80 brightness-100" : "hidden"}`}
        community={community} 
        profile={profile} 
        message={message} 
        resources={resources} 
        handleCommunity={handleCommunity}
        handleMessage={handleMessage}
        handleProfile={handleProfile}
        handleResources={handleResources}
        />
      </div>
      
    );
}