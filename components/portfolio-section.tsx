"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["Todos", "Corpóreos", "Lonas", "Vehículos"]

const portfolioItems = [
  { id: 1, category: "Corpóreos", height: "tall" },
  { id: 2, category: "Lonas", height: "short" },
  { id: 3, category: "Vehículos", height: "medium" },
  { id: 4, category: "Corpóreos", height: "medium" },
  { id: 5, category: "Lonas", height: "tall" },
  { id: 6, category: "Vehículos", height: "short" },
  { id: 7, category: "Corpóreos", height: "short" },
  { id: 8, category: "Lonas", height: "medium" },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredItems = portfolioItems.filter((item) => activeCategory === "Todos" || item.category === activeCategory)

  const getHeightClass = (height: string) => {
    switch (height) {
      case "tall":
        return "row-span-2"
      case "short":
        return "row-span-1"
      default:
        return "row-span-1"
    }
  }

  return (
    <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Nuestros Trabajos</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8 text-balance">
            Proyectos realizados para empresas del Gran Rosario y el cordón industrial
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
                    : "border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className={`group relative overflow-hidden rounded-lg ${getHeightClass(item.height)}`}>
              <img
                src={`/.jpg?height=400&width=400&query=${item.category.toLowerCase()}+signage+${item.id}`}
                alt={`${item.category} project ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded mb-2">
                    {item.category}
                  </span>
                  <p className="text-white text-sm">Proyecto #{item.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
