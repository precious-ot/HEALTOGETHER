 
 type ProfessionalProps = {
    name: string;
    service: string;
} 

export function ProfessionalCard({name, service}: ProfessionalProps){
    return(
        <div className="bg-white p-6 rounded-2xl shadow-sm border-1 border-neutral-200 hover:shadow-md transition ease-in-out duration-300 hover:scale-[1.02]"> 
            <h1 className="text-md font-semibold text-[#5d4e37]">{name}</h1>
            <p className="text-[#5d4e37] text-sm opacity-70 mt-2">{service}</p>
            <div className="flex justify-between font-semibold gap-2 mt-4">
            <button className="text-xs text-white bg-[#e8b4a0] py-2 px-2 rounded-full">Free/Low-Cost</button>   
            <button className="text-xs text-black  border-1 border-neutral-200 py-2 px-2 cursor-pointer rounded-md">
                    <i className="bi bi-box-arrow-up-right text-md"></i>
                    <span className="text-sm ml-2">Visit</span>
                    </button> 
            </div>
        </div>
    );
}


 export default function Professional(){
    return(
        <div>
            <div className="grid place-items-center gap-4 mt-10">
                <i className="bi bi-person-bounding-box text-[#d4a574] text-6xl opacity-70"></i>
                <h2 className="text-2xl font-semibold text-[#5d4e37] text-center">Free & Low-Cost Professional Support</h2>
                <p className="text-center text-[#5d4e37] opacity-70 max-w-2xl">While our community provides valuable peer support, professional help can be crucial for your healing journey. Here are free and affordable resources for qualified mental health support.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-15">
                <ProfessionalCard
                    name="Psychology Today Therapist Directory"
                    service="Find therapists who offer sliding scale or low-cost services in your area" />
                <ProfessionalCard
                    name="Open Path Collective"
                    service="Affordable therapy sessions ($30-$60) with licensed therapists" />
                <ProfessionalCard
                    name="SAMHSA Treatment Locator"
                    service="Find free and low-cost treatment facilities near you" />
                <ProfessionalCard
                    name="211 Helpline"
                    service="Dial 211 for free local mental health resources and support services" />
                <ProfessionalCard
                    name="Community Health Centers"
                    service="Federally funded centers offering free/low-cost mental health services" />
                <ProfessionalCard
                    name="University Training Clinics"
                    service="Many universities offer free therapy with supervised graduate students" />
                </div>
                <div className="bg-[#f5efe7] py-5 px-5 rounded-lg text-start mt-10">
                    <h3 className="text-md font-semibold text-[#5d4e37]">💡 Tips for Finding Free/Affordable Therapy</h3>
                    <ul className="list-disc list-inside mt-3 text-sm text-[#5d4e37] opacity-90">
                    <li className="py-1">Ask about sliding scale fees - many therapists offer reduced rates based on income</li>
                    <li className="py-1">Check if your insurance covers mental health services (many are required to by law)</li>
                    <li className="py-1">Contact local community centers, churches, or nonprofits for free support groups</li>
                    <li className="py-1">Contact local community centers, churches, or nonprofits for free support groups</li>
                    </ul>
                </div>
        </div>
    )
}