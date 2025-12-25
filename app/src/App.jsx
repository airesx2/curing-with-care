import { useState } from "react"
import { LoginCard } from "./components/LoginCard"
import { SearchBar } from "./components/SearchBar"

function App() {
  const [query, setQuery] = useState("")

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-10 p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-red-600">
        This is a red H1 heading
      </h1>

      {/* Search bar */}
      <div className="w-full max-w-md">
        <SearchBar
          placeholder="Search articles..."
          onSearch={(value) => setQuery(value)}
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Current query: {query || "none"}
        </p>
      </div>

      {/* Login card */}
      <LoginCard />
    </div>
  )
}

export default App
