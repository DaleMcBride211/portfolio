import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-slate-800 text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Dale McBride
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="#about" className="hover:text-indigo-400">
              About
            </Link>
            <Link href="#skills" className="hover:text-indigo-400">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-indigo-400">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-indigo-400">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-col gap-16 sm:gap-24">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi, I am Dale McBride</h2>
            <p className="text-lg text-gray-600 mb-6">
              A passionate full-stack web developer with a strong foundation in both front-end and back-end technologies. I love building scalable and user-friendly web applications.
            </p>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Label className="font-semibold">Name:</Label>
                <span>Dale McBride</span>
              </div>
              <div className="flex items-center gap-2">
                <Label className="font-semibold">Email:</Label>
                <a href="mailto:john.doe@example.com" className="text-blue-600 hover:underline">
                  dalemcbride129@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Label className="font-semibold">Phone:</Label>
                <a href="tel:+11234567890" className="text-blue-600 hover:underline">
                  (307) 314-5132
                </a>
              </div>
            </div>
            <Button asChild>
              <Link href="#projects">View My Projects</Link>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Avatar className="w-32 h-32 rounded-full shadow-md">
              {/* You can use an actual image here */}
              <AvatarImage src="headshot.JPG" />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* About Section with Shadcn UI Components */}
        <section id="about" className="py-12 md:py-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              As a full-stack developer, my passion lies in crafting web solutions that are not only impactful but also highly efficient. My journey through the world of web development has provided me with a versatile skill set and a comprehensive understanding of the entire development process.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I am a firm believer in continuous learning and actively seek out new technologies to ensure I remain at the cutting edge of web development trends. I find great satisfaction in collaborative settings and am energized by the challenge of tackling intricate problems.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Education</h3>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Brigham Young University</CardTitle>
                <CardDescription>2023 - 2027</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Minor in Web Development
                </p>
                <div className="mt-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                    GPA: 3.9
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-700">Front-End</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Shadcn/ui</Badge> 
                <Badge variant="secondary">Typescript</Badge>
                {/* Add more front-end skills as Badges */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-700">Back-End</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">Python</Badge>
                {/* Add more back-end skills as Badges */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-700">Databases</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">SQL</Badge>
                {/* Add more database skills as Badges */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-700">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">Vercel</Badge>
                {/* Add more tools and technologies as Badges */}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card - Repeat for each project */}
            {/* ... more projects ... */}
            <Card>
              <CardHeader>
                <CardTitle>Lynk</CardTitle>
                <CardDescription>Another interesting project.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/project2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  Technologies used: 
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Shadcn/ui</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    
                    
                    
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">GitHub</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Profyt</CardTitle>
                <CardDescription>Another interesting project.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/project2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  Technologies used: 
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Shadcn/ui</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">Next.js</Badge>
                   
                    
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">GitHub</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scrypt</CardTitle>
                <CardDescription>An AI integrated note taking app.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="scryptnotesthumbnail.png" alt="Scrypt Notes Image" className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  Technologies used: 
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Typescript</Badge>
                    <Badge variant="outline">Gemini Integration</Badge>
                    <Badge variant="outline">Shadcn/ui</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link href="https://scryptnotes.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://github.com/DaleMcBride211/scryptnotes" target="_blank" rel="noopener noreferrer">GitHub</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Add more project Cards here */}
            <Card>
              <CardHeader>
                <CardTitle>Tempyst</CardTitle>
                <CardDescription>Weather App with Next Auth </CardDescription>
              </CardHeader>
              <CardContent>
                <img src="tempystpreview.png" alt="tempyst preview" className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  Technologies used: 
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Shadcn/ui</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Typescript</Badge>
                    <Badge variant="outline">Next Auth</Badge>
                    <Badge variant="outline">API</Badge>
                    
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link href="https://tempyst.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://github.com/DaleMcBride211/tempyst" target="_blank" rel="noopener noreferrer">GitHub</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Budjyt</CardTitle>
                <CardDescription>Another interesting project.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/project2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  Technologies used: 
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Shadcn/ui</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">GitHub</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>GIS Project</CardTitle>
                <CardDescription>Another interesting project.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/project2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  Technologies used: 
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Shadcn/ui</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">GitHub</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Dale McBride. All rights reserved.</p>
          {/* You can add social media links here */}
        </div>
      </footer>
    </>
  );
}