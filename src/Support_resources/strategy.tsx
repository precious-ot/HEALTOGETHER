 
 type StrategyProps = {
    title: string;
    description: string;
    steps: string;
 }


export function StrategyCard({title, description, steps}: StrategyProps){ 
    return(
        <div className="bg-white p-5 rounded-2xl shadow-sm border-1 border-neutral-200 hover:shadow-md transition ease-in-out duration-300 hover:scale-[1.02]">
            <div className="flex gap-5">
                    <i className="bi bi-heart text-[#d4a574] text-lg font-semibold mt-2"></i>
               <div>
                <h1 className="text-md font-semibold text-[#5d4e37]">{title}</h1>
                <p className="text-[#5d4e37] text-sm opacity-70 mt-2">{description}</p>
               </div>
            </div>
            <div className="mt-4 bg-[#f5efe7] p-4 rounded-xl">
                <p className="text-sm text-[#5d4e37] opacity-90 mt-1">{steps}</p>
                </div>
        </div>
    );
}

export default function Strategy(){
    return(
        <div>
            <div className="grid sm:grid-cols-2 gap-4">
                <StrategyCard 
                title="Box Breathing Technique" 
                description="A simple breathing exercise to reduce anxiety and stress" 
                steps="Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat 4-8 times." />
                <StrategyCard 
                title="5-4-3-2-1 Grounding Exercise" 
                description="TUse your senses to stay present during overwhelming moments" 
                steps="Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste." />
                <StrategyCard 
                title="Progressive Muscle Relaxation" 
                description="Reduce physical tension and mental stress by tensing and relaxing muscle groups" 
                steps="Tense and then relax each muscle group, starting from your toes and working up." />
                <StrategyCard 
                title="Mindful Walking" 
                description="Combine movement with mindfulness for emotional regulation" 
                steps="Focus on each step, your breathing, and your surroundings as you walk slowly." />
                </div>
        </div>
    )
}