"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, RefreshCw, Sparkles } from "lucide-react"

interface Joke {
  id: number;
  setup: string;
  punchline: string;
  category: string;
}

export default function Home() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)
    try {
      // CALLING OUR OWN INTERNAL API ENDPOINT
      const res = await fetch('/api/joke', { cache: 'no-store' })
      
      if (!res.ok) throw new Error("Server error")
      
      const data = await res.json()
      setJoke(data)
    } catch (error) {
      console.error("Failed to fetch", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md shadow-xl border-slate-200">
        <CardHeader className="text-center pb-2">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-800">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            Desi Humour API
          </CardTitle>
          <CardDescription>Serving jokes from our local Next.js API</CardDescription>
        </CardHeader>
        
        <CardContent className="min-h-[200px] flex flex-col justify-center py-6">
          {loading ? (
             <div className="flex flex-col items-center gap-2 text-slate-400">
               <Loader2 className="h-8 w-8 animate-spin" />
               <span className="text-sm">Contacting server...</span>
             </div>
          ) : joke ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-300">
                <p className="text-lg font-medium text-slate-700">"{joke.setup}"</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <p className="text-xl font-bold text-blue-700">{joke.punchline}</p>
              </div>
              
              <div className="flex justify-end">
                <span className="text-xs font-semibold px-2 py-1 bg-slate-200 rounded-full text-slate-600">
                  #{joke.category}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center text-red-500">System Error: API Unreachable</div>
          )}
        </CardContent>

        <CardFooter className="pt-2">
          <Button 
            onClick={fetchJoke} 
            disabled={loading} 
            className="w-full h-12 text-lg font-medium bg-slate-900 hover:bg-slate-800 transition-all"
          >
            {loading ? "Fetching..." : (
              <>
                <RefreshCw className="mr-2 h-5 w-5" /> Get Another Joke
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
      
      <p className="mt-8 text-xs text-slate-400">
        Architecture: Next.js App Router • API Routes • Tailwind CSS
      </p>
    </main>
  )
}