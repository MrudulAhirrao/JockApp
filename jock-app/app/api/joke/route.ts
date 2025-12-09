import { NextResponse } from 'next/server';

type Joke = {
  id: number;
  setup: string;
  punchline: string;
  category: string;
};

const database: Joke[] = [
  // --- TECH & CORPORATE ---
  { 
    id: 1, 
    setup: "Why did the Indian developer leave his job?", 
    punchline: "Because he didn't get arrays (a raise).", 
    category: "Tech"
  },
  { 
    id: 2, 
    setup: "Interviewer: Where do you see yourself in 5 years?", 
    punchline: "Candidate: Sir, your vision is 20/20, why are you asking me?", 
    category: "Corporate" 
  },
  { 
    id: 3, 
    setup: "My code is like an arranged marriage.", 
    punchline: "I don't know how it works, but everyone says I have to stick with it.", 
    category: "Tech" 
  },
  {
    id: 4,
    setup: "Manager: Can you stay late tonight?",
    punchline: "Me: Sir, my parents are very strict. They don't allow me to be exploited after 6 PM.",
    category: "Corporate"
  },
  {
    id: 5,
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs!",
    category: "Tech"
  },

  // --- DESI PARENTS ---
  { 
    id: 6, 
    setup: "Why did the Indian parent allow their kid to play on the Xbox?", 
    punchline: "Because it was the only way to get them to look at a 'Controller' job.", 
    category: "Family" 
  },
  { 
    id: 7, 
    setup: "Sharma ji's son got 99%.", 
    punchline: "My dad looking at my 80%: 'Beta, did you leave the other 20% as a tip?'", 
    category: "Family" 
  },
  { 
    id: 8, 
    setup: "Mom: Who is 'General Failure'?", 
    punchline: "And why is he reading your hard disk?", 
    category: "Family" 
  },
  {
    id: 9,
    setup: "Me: Mom, I have a headache.",
    punchline: "Mom: It's because of that damn phone!",
    category: "Family"
  },

  // --- DAILY LIFE ---
  { 
    id: 10, 
    setup: "What is the most common lie in India?", 
    punchline: "'Bas 2 minute mein pahunch raha hoon' (Reaching in just 2 mins).", 
    category: "Traffic" 
  },
  { 
    id: 11, 
    setup: "Teacher: Why are you late?", 
    punchline: "Student: Sir, because of the sign on the road. Teacher: What sign? Student: 'School Ahead, Go Slow'.", 
    category: "School" 
  },
  {
    id: 12,
    setup: "Doctor: Your weight is perfect.",
    punchline: "Patient: Really? Doctor: Yes, for an elephant.",
    category: "Health"
  },
  {
    id: 13,
    setup: "Why did the cricket ball go to the police?",
    punchline: "Because it was hit for a six!",
    category: "Sports"
  },
  {
    id: 14,
    setup: "Gym Trainer: Do some lunges.",
    punchline: "Me: Okay. *Takes out lunch box*",
    category: "Health"
  },
  {
    id: 15,
    setup: "Shopkeeper: This item has a lifetime warranty.",
    punchline: "Customer: Whose lifetime? Mine, yours, or the product's?",
    category: "Shopping"
  }
];

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 500));

  const randomIndex = Math.floor(Math.random() * database.length);
  const randomJoke = database[randomIndex];

  return NextResponse.json(randomJoke, { status: 200 });
}