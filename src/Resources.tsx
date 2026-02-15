import { useState } from "react";
import Crisis from "./Support_resources/Crisis";
import Strategy from "./Support_resources/strategy";
import Articles from "./Support_resources/Articles";
import Professional from "./Support_resources/Profetional";



export default function Resources() {
    const [crisis, setCrisis] = useState<boolean>(true);
    const [strategies, setStrategies] = useState<boolean>(false);
    const [professional, setProfessional] = useState<boolean>(false);
    const [articles, setArticles] = useState<boolean>(false);

    const handleCrisisClick = () => {
    setCrisis(true);
    setStrategies(false);
    setProfessional(false);
    setArticles(false);
    }
    
    const handleStrategiesClick = () => {
        setCrisis(false);
        setStrategies(true);
        setProfessional(false);
        setArticles(false);
    }

    const handleProfessionalClick = () => {
        setCrisis(false);
        setStrategies(false);
        setProfessional(true);
        setArticles(false);
    }

    const handleArticlesClick = () => {
        setCrisis(false);
        setStrategies(false);
        setProfessional(false);
        setArticles(true);
    }

    return(
        <div className="bg-[#fdf8f3] py-10 px-5 sm:px-10">
            <h1 className="text-3xl font-bold text-start text-[#5d4e37]">Support Resources</h1>
            <p className="text-start  text-[#5d4e37] opacity-70 mt-3">Tools, guides, and professional support to help you on your healing journey.</p>
            <div className="flex place-items-center border-1 border-neutral-300 rounded-md mt-5 px-3 bg-white max-w-md">
                <i className="bi bi-search text-sm text-neutral-400"></i>
                <input type="text" placeholder="Search resources..." className="w-full text-sm px-3 py-2 focus:outline-none"/>
            </div>
            <div className="mt-10 w-auto grid grid-cols-2 md:grid-cols-3 lg:inline-flex text-left gap-4 bg-white px-3 py-2 rounded-md shadow-sm text-muted-foreground">
                  <button className={`flex place-items-center gap-2 text-[#5d4e37] font-semibold ${crisis ? "font-semibold pb-2 opacity-100" : "opacity-70 hover:opacity-100" }`} onClick={handleCrisisClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-triangle-alert w-4 h-4" ><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>                  
                    <span className="text-sm text-[#5d4e37]">Crisis Support</span>
                    </button>
                    <button className={`flex place-items-center gap-2 text-[#5d4e37] font-semibold ${strategies ? "font-semibold pb-2 opacity-100" : "opacity-70 hover:opacity-100" }`} onClick={handleStrategiesClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-4 h-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        <span className="text-sm text-[#5d4e37]">Coping Strategies</span>
                        </button>
                    <button className={`flex place-items-center gap-2 text-[#5d4e37] font-semibold ${professional ? "font-semibold pb-2 opacity-100" : "opacity-70 hover:opacity-100" }`} onClick={handleProfessionalClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield w-4 h-4"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                            </path></svg>
                        <span className="text-sm text-[#5d4e37]">Professional Help</span>
                        </button>
                    <button className={`flex place-items-center gap-2 text-[#5d4e37] font-semibold ${articles ? "font-semibold pb-2 opacity-100" : "opacity-70 hover:opacity-100" }`} onClick={handleArticlesClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open w-4 h-4"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z"></path><path d="M22 3
                        h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z"></path></svg>
                        <span className="text-sm text-[#5d4e37]">Articles & Guides</span>
                        </button>
            </div>
            <div className="mt-8">
                {/* Render resource components based on state */}
                {crisis && 
                    <Crisis />
                }
                {strategies && 
                    <Strategy />
                }
                {professional &&
                    <Professional />
                }
                {articles &&
                    <Articles />
                }
            </div>
        </div>
    )
}