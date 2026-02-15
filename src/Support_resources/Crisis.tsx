type CrisisProps = {
    title: string;
    description: string;
    phoneNumber: string;
}

export function CrisisCard({title, description, phoneNumber}: CrisisProps){
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border-1 border-neutral-200 hover:shadow-md transition ease-in-out duration-300 hover:scale-[1.02]">
        <h1 className="text-md font-semibold text-[#5d4e37]">{title}</h1>
        <p className="text-[#5d4e37] text-sm opacity-70 mt-2">{description}</p>
        <div className="flex justify-between font-semibold gap-2 mt-4">
            <button className="text-xs text-white bg-[#e8b4a0] py-2 px-2 rounded-full">24/7 Available</button>
           <button className="text-xs text-white bg-[#d4a574] py-2 px-2 cursor-pointer rounded-md">
            <i className="bi bi-telephone text-sm"></i>
            <span className="text-sm ml-1">{phoneNumber}</span>
            </button> 
            </div>
      </div>
    );
}

export default function Crisis() {
    return(
        <div>
            <div className="bg-red-50 py-6 px-6 border-1 opacity-90 rounded-2xl border-red-200 flex gap-4">
                <i className="bi bi-exclamation-triangle text-red-600 text-2xl"></i>
                <div>
                    <h2 className="text-red-900 font-semibold text-lg">If you're in immediate danger</h2>
                    <p className="text-red-800 mt-2">Please call 911 or go to your nearest emergency room. Your safety is the top priority.</p>
                    <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition">
                       <i className="bi bi-telephone mr-3"></i>
                       <span>Call 911</span>
                        </button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
                <CrisisCard title="National Suicide Prevention Lifeline"
                 description="24/7 crisis support for anyone in emotional distress" 
                 phoneNumber="Call or Text 988" />
                <CrisisCard 
                title="Crisis Text Line" 
                description="Free, 24/7 support via text message" 
                phoneNumber="Text HOME to 741741" />
                <CrisisCard 
                title="SAMHSA National Helpline" 
                description="Free treatment referral and information service" 
                phoneNumber="1-800-662-HELP (4357)" />
                <CrisisCard 
                title="National Domestic Violence Hotline" 
                description="24/7 confidential support for domestic violence" 
                phoneNumber="1-800-799-7233" />
            </div>
        </div>
    )
}