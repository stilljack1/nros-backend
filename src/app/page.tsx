export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
      <div className="border border-green-900 bg-green-900/10 p-8 rounded-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          NROS ISOLATED CORE
        </h1>
        
        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-b border-green-900/50 pb-2">
            <span className="text-slate-500">SYSTEM STATUS</span>
            <span className="font-bold">ONLINE</span>
          </div>
          
          <div className="flex justify-between border-b border-green-900/50 pb-2">
            <span className="text-slate-500">ARCHITECTURE</span>
            <span>MICROSERVICE (ISOLATED)</span>
          </div>

          <div className="flex justify-between border-b border-green-900/50 pb-2">
            <span className="text-slate-500">DATABASE</span>
            <span>SECURE LINK ESTABLISHED</span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-black border border-green-900/50 rounded text-xs text-slate-400">
          <p className="mb-2 font-bold text-slate-300">AVAILABLE ENDPOINTS:</p>
          <ul className="space-y-1 font-mono">
            <li>POST /api/nros/command</li>
            <li>POST /api/nros/cyber</li>
            <li>POST /api/nros/field</li>
          </ul>
        </div>

        <div className="mt-6 text-center text-xs text-green-800">
          RESTRICTED ACCESS // AUTHORIZED PERSONNEL ONLY
        </div>
      </div>
    </div>
  );
}
