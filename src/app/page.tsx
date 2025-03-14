import CodeExample from "@/components/ui/CodeExample"
import Cta from "@/components/ui/Cta"
import Hero from "@/components/ui/Hero"

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
            {/**
      <LogoCloud />

      <GlobalDatabase />
       */}
      <CodeExample />
      {/**
      <Features />
       */}
      <Cta />
    </main>
  )
}
