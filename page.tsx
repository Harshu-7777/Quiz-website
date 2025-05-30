"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  Calculator,
  Globe,
  Atom,
  Palette,
  Music,
  LogOut,
  Trophy,
  Star,
  Zap,
  Crown,
  Sparkles,
} from "lucide-react"

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Algebra, Geometry, Calculus & more",
    icon: Calculator,
    gradient: "from-blue-500 via-cyan-400 to-teal-500",
    bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
    borderGradient: "from-blue-400 to-teal-400",
    questions: 250,
    emoji: "🔢",
  },
  {
    id: "science",
    name: "Science",
    description: "Physics, Chemistry, Biology",
    icon: Atom,
    gradient: "from-emerald-500 via-green-400 to-lime-500",
    bgGradient: "from-emerald-50 via-green-50 to-lime-50",
    borderGradient: "from-emerald-400 to-lime-400",
    questions: 300,
    emoji: "🧪",
  },
  {
    id: "history",
    name: "History",
    description: "World History, Ancient Civilizations",
    icon: Globe,
    gradient: "from-amber-500 via-orange-400 to-red-500",
    bgGradient: "from-amber-50 via-orange-50 to-red-50",
    borderGradient: "from-amber-400 to-red-400",
    questions: 220,
    emoji: "🏛️",
  },
  {
    id: "literature",
    name: "Literature",
    description: "Classic & Modern Literature",
    icon: BookOpen,
    gradient: "from-purple-500 via-violet-400 to-indigo-500",
    bgGradient: "from-purple-50 via-violet-50 to-indigo-50",
    borderGradient: "from-purple-400 to-indigo-400",
    questions: 280,
    emoji: "📚",
  },
  {
    id: "arts",
    name: "Arts",
    description: "Visual Arts, Art History",
    icon: Palette,
    gradient: "from-pink-500 via-rose-400 to-fuchsia-500",
    bgGradient: "from-pink-50 via-rose-50 to-fuchsia-50",
    borderGradient: "from-pink-400 to-fuchsia-400",
    questions: 200,
    emoji: "🎨",
  },
  {
    id: "music",
    name: "Music",
    description: "Music Theory, Composers, Instruments",
    icon: Music,
    gradient: "from-indigo-500 via-purple-400 to-pink-500",
    bgGradient: "from-indigo-50 via-purple-50 to-pink-50",
    borderGradient: "from-indigo-400 to-pink-400",
    questions: 240,
    emoji: "🎵",
  },
]

export default function HomePage() {
  const router = useRouter()

  const handleSubjectClick = (subjectId: string) => {
    router.push(`/quiz/${subjectId}`)
  }

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                QuizMaster
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full font-semibold">
                <Crown className="w-4 h-4" />
                <span>Level 1</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            Welcome to QuizMaster!
            <span className="inline-block animate-bounce ml-2">🎯</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Embark on an epic learning adventure! Choose from our colorful subjects below and test your knowledge with
            hundreds of carefully crafted questions.
            <span className="text-yellow-400 font-semibold">Let the fun begin!</span> ✨
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl font-bold mb-2">1,490</div>
              <div className="text-blue-100 flex items-center justify-center space-x-1">
                <Zap className="w-4 h-4" />
                <span>Total Questions</span>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-emerald-500 via-green-400 to-lime-500 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-green-100 flex items-center justify-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Subjects Available</span>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-purple-500 via-pink-400 to-rose-500 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-purple-100 flex items-center justify-center space-x-1">
                <Trophy className="w-4 h-4" />
                <span>Quizzes Completed</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const IconComponent = subject.icon
            return (
              <Card
                key={subject.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl border-2 bg-gradient-to-br ${subject.bgGradient} animate-fade-in hover:border-transparent relative overflow-hidden`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  borderImage: `linear-gradient(135deg, ${subject.borderGradient}) 1`,
                }}
                onClick={() => handleSubjectClick(subject.id)}
              >
                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="relative">
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br ${subject.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">{subject.emoji}</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 mb-2">
                    {subject.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">{subject.description}</CardDescription>
                </CardHeader>

                <CardContent className="text-center relative z-10">
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-semibold text-gray-700">{subject.questions} Questions</span>
                    <Sparkles className="w-4 h-4 text-purple-500" />
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${subject.gradient} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start Quiz</span>
                      <Zap className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-16 text-white/80">
          <p className="text-xl">
            Ready to challenge yourself? Pick a subject and let{"'"}s begin!
            <span className="inline-block animate-pulse ml-2">🚀</span>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {["🎯", "⚡", "🌟", "🎉", "💫"].map((emoji, i) => (
              <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 200}ms` }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
