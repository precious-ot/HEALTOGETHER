import { useState } from "react";



export default function Profile() {
    const [experience1, setExperience1] = useState<boolean>(false);
    const [experience2, setExperience2] = useState<boolean>(false);
    const [experience3, setExperience3] = useState<boolean>(false);
    const [experience4, setExperience4] = useState<boolean>(false);
    const [experience5, setExperience5] = useState<boolean>(false);
    const [experience6, setExperience6] = useState<boolean>(false);
    const [experience7, setExperience7] = useState<boolean>(false);
    const [experience8, setExperience8] = useState<boolean>(false);
    const [experience9, setExperience9] = useState<boolean>(false);
    const [experience10, setExperience10] = useState<boolean>(false);
    
    return(
        <div className="bg-[#fdf8f3] py-10 sm:px-10 px-5">
            <h1 className="text-3xl font-bold text-start text-[#5d4e37]">Your Profile</h1>
            <p className="text-start  text-[#5d4e37] opacity-70 mt-3">Share what feels comfortable. This helps us connect you with the right support community.</p>
        <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm border-1 border-neutral-200">
          <div className="flex place-items-center gap-3">
            <i className="bi bi-person text-[#5d4e37] text-2xl font-bold"></i>
            <h2 className="text-2xl font-semibold text-amber-900">Basic Information</h2>
            </div>
            <form className="w-full mt-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-[#5d4e37] mb-2" htmlFor="name">How would you like to be known?</label>
                    <input className="w-full px-4 py-2 border-2 border-2 border-amber-900 opacity-60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a574]" type="text" id="name" placeholder="Choose a display name"/>
                    <p className="text-xs text-neutral-500 mt-1">This can be your real name, a nickname, or something completely anonymous.</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-[#5d4e37] mb-2" htmlFor="story">Your Story (Optional)</label>
                    <textarea className="w-full px-4 py-2 border-2 border-2 border-amber-900 opacity-60 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a574]" id="story" placeholder="Share as much or as little as you're comfortable with..."/>
                    <p className="text-xs text-neutral-500 mt-1">This helps others understand your journey and how they might relate to your experience.</p>
                </div>
                <div className="flex gap-2 place-items-center mt-4">
                    <input type="checkbox" id="anonymous" className="appearance-none w-5 h-5 border-2 opacity-70 border-[#5d4e37] rounded-sm checked{` check[]rder-[#5d4e37] checked:befxle:content-['✔'] checked:before`}text-white checked:before:block checked:before:text-center checked:before:leading-5"/>
                    <p className="text-sm font-medium text-[#5d4e37]">I prefer to remain anonymous by default</p>
                </div>
            </form>
         </div>
         <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm border-1 border-neutral-200">
            <div className="flex place-items-center gap-3 mb-6">
                <i className="bi bi-heart text-[#5d4e37] text-xl font-bold"></i>
                <h1 className="text-2xl sm:text-3xl font-bold text-start text-[#5d4e37]">Your Experiences</h1>
            </div>   
         <p className="text-start  text-[#5d4e37] opacity-70 mb-6">Select the experiences that resonate with you. This helps us connect you with others who understand your journey.</p>
         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
           <button className={`text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience1 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience1(!experience1)}>Grief & Loss</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience2 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience2(!experience2)}>Addiction Recovery</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience3 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience3(!experience3)}>Abuse Survivor</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience4 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience4(!experience4)}>Mental Health</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience5 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience5(!experience5)}>Chronic Illness</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience6 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience6(!experience6)}>Divorce & Separation</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience7 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience7(!experience7)}>Work-related Trauma</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience8 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience8(!experience8)}>Military /Veteran</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience9 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience9(!experience9)}>Family Trauma</button>
         <button className={` text-[#5d4e37] px-4 py-2 text-start rounded-xl ${experience10 ? "border-2 border-amber-900" : "border-2 border-neutral-200"}`} onClick={() => setExperience10(!experience10)}>Other</button>
            </div>
         </div>
         <div className="grid sm:grid-cols-2 gap-8 mt-6">
            <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm border-1 border-neutral-200">
                <div className="flex place-items-center gap-2">
                  <i className="bi bi-chat text-[#5d4e37] text-2xl"></i>
                  <h3 className="text-lg font-semibold text-amber-900 ">Support I'm Seeking</h3>
                </div>
                <div className="grid mt-8 gap-4">
            {["Anxiety","Depression","Self-Esteem Issues","Grief and Loss","Trauma Recovery","Chronic Illness Support"].map((experience) => (
                <div key={experience} className="flex gap-2 place-items-center">
                    <input type="checkbox" id={experience} className="appearance-none w-5 h-5 border-1 border-[#5d4e37] rounded-sm checked{` check[]rder-[#5d4e37] checked:befxle:content-['✔'] checked:before`}text-white checked:before:block checked:before:text-center checked:before:leading-5"/>
                    <label htmlFor={experience} className="text-sm font-medium text-[#5d4e37]">{experience}</label>
                </div>
            ))}
            </div>
            </div>
             <div className="bg-white mt-8 p-6 rounded-2xl shadow-sm border-1 border-neutral-200">
                <div className="flex place-items-center gap-2">
                  <i className="bi bi-shield text-[#5d4e37] text-2xl"></i>
                  <h3 className="text-lg font-semibold text-amber-900">Support I Can Offer</h3>
                </div>
                <div className="grid mt-8 gap-4">
             {["Active Listening","Sharing Personal Experiences","Providing Encouragement","Offering Practical Advice","Being a Consistent Check-in Buddy","Helping with Resource Navigation"].map((experience) => (
                <div key={experience} className="flex gap-2 place-items-center">
                    <input type="checkbox" id={experience} className="appearance-none w-5 h-5 border-1 border-[#5d4e37] rounded-sm checked{` check[]rder-[#5d4e37] checked:befxle:content-['✔'] checked:before`}text-white checked:before:block checked:before:text-center checked:before:leading-5"/>
                    <label htmlFor={experience} className="text-sm font-medium text-[#5d4e37]">{experience}</label>
                </div>
            ))}
            </div>
            </div>
         </div>
         <div className="mt-8 mb-10 flex justify-end">
            <button className="bg-[#d4a574] text-white px-6 py-3 rounded-lg transition duration-300">
                <i className="bi bi-floppy mr-2"></i>
                <span>Save Profile</span></button>
         </div>
        </div>
    )
}