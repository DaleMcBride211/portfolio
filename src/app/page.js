import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-col gap-16 sm:gap-24">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi, I&apos;m Dale McBride</h2>
            <p className="text-lg text-gray-600 mb-6">
              I&apos;m a full-stack developer passionate about building dynamic web applications with Next.js and TypeScript. I&apos;m looking for an internship where I can challenge myself, contribute to real-world projects, and further develop my technical skills.
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
            <Avatar className="w-72 h-72 rounded-full shadow-md">
              
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
              Ever since I was young, I&apos;ve been fascinated by technology, especially getting hands-on with building gaming computers. It was clear to me then that a career in tech was my path. I chose programming because it offers the incredible ability to create anything you can imagine. 
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I&apos;m a full-stack developer about to graduate with my Computer Science degree. My main goal is to constantly learn how to write more efficient and effective code. I&apos;m currently seeking an internship to apply my skills and grow further. 
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Education</h3>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Brigham Young University</CardTitle>
                <CardDescription>2023 - 2026</CardDescription>
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
                <Badge variant="secondary">React Native</Badge>
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
           <Card>
            <CardHeader>
              <CardTitle>Budjyt</CardTitle>
              <CardDescription>Expense Tracker App (React Native)</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-xs mx-auto mb-4">
                <CarouselContent>
                  <CarouselItem>
                    <Image src="/budjytlogin.png" alt="budjyt preview" width={500} height={300} className="w-full h-48 object-contain rounded-md" />
                  </CarouselItem>
                  <CarouselItem>
                    <Image src="/budjythomepage.png" alt="budjyt homepage" width={500} height={300} className="w-full h-48 object-contain rounded-md" />
                  </CarouselItem>
                  <CarouselItem>
                    <Image src="/budjytexpensepage.png" alt="budjyt expensepage" width={500} height={300} className="w-full h-48 object-contain rounded-md" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="text-sm text-gray-600 mb-4">
                Technologies used:
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Supabase</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Auth</Badge>
                </div>
              </div>
              <div className="flex space-x-2">
                
                <Button asChild variant="outline">
                  <Link href="https://github.com/DaleMcBride211/budjyt" target="_blank" rel="noopener noreferrer">GitHub</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
            <Card>
              <CardHeader>
                <CardTitle>Lynk</CardTitle>
                <CardDescription>Task manager app</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="/lynkpreview.png" alt="lynk preview" width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-sm text-gray-600 mb-4">
                  Technologies used: 
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">Shadcn/ui</Badge>
                    <Badge variant="outline">Auth</Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline">
                    <Link href="https://lynk-rho.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://github.com/DaleMcBride211/lynk" target="_blank" rel="noopener noreferrer">GitHub</Link>
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
                <Image src="/scryptnotesthumbnail.png" alt="Scrypt Notes Image" width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
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
            <Card>
              <CardHeader>
                <CardTitle>Tempyst</CardTitle>
                <CardDescription>Weather App with Next Auth </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="/tempystpreview.png" alt="tempyst preview" width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
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
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Dale McBride. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}