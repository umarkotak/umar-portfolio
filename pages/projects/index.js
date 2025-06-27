import React, { useState } from 'react'
import { Eye, Github, Link2, Filter, Calendar, Code2, ExternalLink, ChevronDown, ChevronUp, X, Zap, Star, Users, Award } from 'lucide-react'

export default function ImprovedProjects() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [sortBy, setSortBy] = useState('year')
  const [zoomedImage, setZoomedImage] = useState(null)
  const [expandedDescriptions, setExpandedDescriptions] = useState({})

  const projects = [
    {
      id: 1,
      title: "Live Everywhere",
      status: "live",
      type: "work",
      year: 2023,
      description: "Everywhereid is a platform for content creators to do live streaming with breakthrough online-to-offline performance, allowing creators to live in multiple places at once such as malls, food courts, cafes, and train stations.",
      techStacks: ["ruby on rails", "golang", "mongodb", "postgresql", "redis", "kafka"],
      mainImage: "/images/projects/live-everywhere-thumb.png",
      thumbnails: [
        "/images/projects/live-everywhere-thumb-2.png",
        "/images/projects/live-everywhere-thumb-3.png",
        "/images/projects/live-everywhere-thumb-4.png",
      ],
      links: {
        projectUrl: "https://play.everywhere.id"
      },
      featured: true
    },
    {
      id: 2,
      title: "Cookie Kid",
      status: "live",
      type: "personal",
      year: 2023,
      description: "Entertainment platform for kids with personally curated content, quiz features, reading books, worksheets for doodling, AI conversation, and more - ensuring safe, educational content consumption.",
      techStacks: ["javascript", "nextjs"],
      mainImage: "/images/projects/ytkidd-thumb.png",
      thumbnails: [
        "/images/projects/ytkidd-thumb-2.png",
        "/images/projects/ytkidd-thumb-3.png",
        "/images/projects/ytkidd-thumb-4.png",
        "/images/projects/ytkidd-thumb-5.png",
        "/images/projects/ytkidd-thumb-6.png",
      ],
      links: {
        beGitUrl: "https://github.com/umarkotak/ytkidd-nextjs",
        projectUrl: "https://cookiekid.vercel.app"
      },
      featured: true
    },
    {
      id: 3,
      title: "Best LMS",
      status: "on hold",
      type: "personal",
      year: 2024,
      description: "Learning Management System built for Indonesian schools with local/global hosting capabilities. Features include payment systems, content management, student/teacher management, and comprehensive school operations support.",
      techStacks: ["golang", "javascript", "nextjs", "postgresql"],
      mainImage: "/images/projects/best-lms-thumb.png",
      thumbnails: [
        "/images/projects/best-lms-thumb-2.png",
        "/images/projects/best-lms-thumb-3.png",
      ],
      links: {
        feGitUrl: "https://github.com/umarkotak/go-lms-api"
      }
    },
    {
      id: 4,
      title: "Satu Akun",
      status: "live",
      type: "personal",
      year: 2024,
      description: "Chrome extension for secure cookie sharing, allowing users to share account access (like Netflix) without revealing passwords - simply share cookies through the extension.",
      techStacks: ["golang", "nextjs", "html", "chrome extension"],
      mainImage: "/images/projects/satuakun-thumb.png",
      thumbnails: [
        "/images/projects/satuakun-thumb-2.png",
        "/images/projects/satuakun-thumb-3.png",
      ],
      links: {
        // beGitUrl: "https://github.com/umarkotak/satu-akun-nextjs",
        projectUrl: "https://satuakun.vercel.app"
      }
    },
    {
      id: 5,
      title: "MarAI",
      status: "live",
      type: "personal",
      year: 2024,
      description: "Automated tool for dubbing and transcripting with the help of LLM. The dubbing feature is limited to monologue English videos into Indonesian. The transcript feature have LLM integrated in it so after the transcription is done you can discuss the transcript with the LLM. Fully offline powered by open source tools, whisper and ollama.",
      techStacks: ["golang", "javascript", "nextjs"],
      mainImage: "/images/projects/marai-thumb.png",
      thumbnails: [
        "/images/projects/marai-thumb-2.png",
        "/images/projects/marai-thumb-3.png",
        "/images/projects/marai-thumb-4.png",
      ],
      links: {
        projectUrl: "https://kumarai.vercel.app"
      },
      featured: true
    },
    {
      id: 6,
      title: "Bukukas Kita",
      status: "offline",
      type: "personal",
      year: 2020,
      description: "Comprehensive expense tracking app with investment calculator, gold price tracker, and innovative transaction recording using image and voice recognition.",
      techStacks: ["ruby on rails", "golang", "javascript", "reactjs", "postgresql"],
      mainImage: "/images/projects/bukukaskita-thumb.png",
      thumbnails: [
        "/images/projects/bukukaskita-thumb-2.png",
        "/images/projects/bukukaskita-thumb-3.png",
        "/images/projects/bukukaskita-thumb-4.png",
      ],
      links: {
        beGitUrl: "https://github.com/umarkotak/dexpense",
      }
    },
    {
      id: 7,
      title: "Animapu V3",
      status: "live",
      type: "personal",
      year: 2023,
      description: "Next.js learning project - all in one anime and manga platform with modern UI and responsive design.",
      techStacks: ["golang", "javascript", "nextjs"],
      mainImage: "/images/projects/animapu-v3-thumb.png",
      thumbnails: [
        "/images/projects/animapu-v3-thumb-2.png",
        "/images/projects/animapu-v3-thumb-3.png",
        "/images/projects/animapu-v3-thumb-4.png",
      ],
      links: {
        beGitUrl: "https://github.com/umarkotak/animapu-lite-nextjs",
        projectUrl: "https://animapu.vercel.app"
      }
    },
    {
      id: 8,
      title: "Go Kubeseal GUI",
      status: "active",
      type: "personal",
      year: 2024,
      description: "GUI helper tool for managing Kubeseal and Kubesecret operations, simplifying Kubernetes secret management workflows.",
      techStacks: ["golang", "kubeseal", "kubectl"],
      mainImage: "/images/projects/go-kubeseal-gui-thumb.png",
      thumbnails: [],
      links: {
        beGitUrl: "https://github.com/umarkotak/go-kubeseal-gui"
      }
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length, icon: Star },
    { key: 'work', label: 'Work', count: projects.filter(p => p.type === 'work').length, icon: Award },
    { key: 'personal', label: 'Personal', count: projects.filter(p => p.type === 'personal').length, icon: Users },
    { key: 'live', label: 'Live', count: projects.filter(p => p.status === 'live').length, icon: Zap },
  ]

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'all') return true
    if (selectedFilter === 'work') return project.type === 'work'
    if (selectedFilter === 'personal') return project.type === 'personal'
    if (selectedFilter === 'live') return project.status === 'live'
    return true
  }).sort((a, b) => {
    if (sortBy === 'year') return b.year - a.year
    if (sortBy === 'title') return a.title.localeCompare(b.title)
    return 0
  })

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800 border-green-200'
      case 'active': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'on hold': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'offline': return 'bg-red-100 text-red-800 border-red-200'
      case 'moved to cookie kid': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'work': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'personal': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'university': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const ProjectCard = ({ project, isFeatured = false }) => {
    const isExpanded = expandedDescriptions[project.id]
    const shouldShowToggle = project.description.length > 120

    return (
      <div className={`group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${isFeatured ? 'ring-2 ring-orange-200 ring-opacity-60' : ''}`}>
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-2 px-3 py-1.5 z-10 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full text-xs font-bold shadow-lg">
            ⭐ Featured
          </div>
        )}

        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 cursor-pointer"
            onClick={() => setZoomedImage(project.mainImage)}
          />

          {/* Type Badge */}
          <div className={`absolute top-4 ${isFeatured ? 'left-28' : 'left-4'} px-3 py-1.5 rounded-full text-xs font-semibold border shadow-sm backdrop-blur-sm ${getTypeColor(project.type)}`}>
            {project.type === 'work' ? '💼 Work' : project.type === 'personal' ? '🚀 Personal' : '🎓 University'}
          </div>

          {/* Status Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-sm backdrop-blur-sm ${getStatusColor(project.status)}`}>
            {project.status === 'live' && '🟢'} {project.status === 'active' && '🔵'} {project.status === 'on hold' && '🟡'} {project.status === 'offline' && '🔴'} {project.status}
          </div>

          {/* Year Badge */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 border border-gray-200 shadow-sm">
            <Calendar size={12} className="inline mr-1.5" />
            {project.year}
          </div>

          {/* Hover Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Thumbnails */}
          {project.thumbnails.length > 0 && (
            <div className="flex gap-2 mb-5 overflow-x-auto pb-2">
              {project.thumbnails.slice(0, 4).map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`${project.title} preview ${index + 1}`}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-yellow-200 flex-shrink-0 hover:scale-110 hover:border-orange-300 transition-all duration-300 cursor-pointer shadow-sm"
                  onClick={() => setZoomedImage(thumb)}
                />
              ))}
              {project.thumbnails.length > 4 && (
                <div className="w-14 h-14 rounded-xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-xs text-gray-500 flex-shrink-0 font-medium">
                  +{project.thumbnails.length - 4}
                </div>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight">
            {project.title}
          </h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStacks.slice(0, 8).map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-800 hover:from-yellow-100 hover:to-orange-100 hover:scale-105 transition-all duration-200 shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.techStacks.length > 8 && (
              <span className="bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                +{project.techStacks.length - 4} more
              </span>
            )}
          </div>

          {/* Description with Toggle */}
          <div className="mb-6">
            <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
              shouldShowToggle && !isExpanded ? 'line-clamp-3' : ''
            }`}>
              {project.description}
            </p>

            {shouldShowToggle && (
              <button
                onClick={() => toggleDescription(project.id)}
                className="flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-medium mt-2 transition-colors group/toggle"
              >
                <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                {isExpanded ? (
                  <ChevronUp size={16} className="group-hover/toggle:scale-110 transition-transform" />
                ) : (
                  <ChevronDown size={16} className="group-hover/toggle:scale-110 transition-transform" />
                )}
              </button>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {project.links.feGitUrl && (
                <a
                  href={project.links.feGitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 text-gray-700 hover:from-yellow-100 hover:to-orange-100 hover:scale-110 transition-all duration-200 shadow-sm"
                  title="Frontend Repository"
                >
                  <Github size={16} />
                </a>
              )}
              {project.links.beGitUrl && (
                <a
                  href={project.links.beGitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 text-gray-700 hover:from-yellow-100 hover:to-orange-100 hover:scale-110 transition-all duration-200 shadow-sm"
                  title="Backend Repository"
                >
                  <Code2 size={16} />
                </a>
              )}
              {project.links.detailUrl && (
                <a
                  href={project.links.detailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 text-gray-700 hover:from-yellow-100 hover:to-orange-100 hover:scale-110 transition-all duration-200 shadow-sm"
                  title="Project Details"
                >
                  <Eye size={16} />
                </a>
              )}
            </div>

            {project.links.projectUrl && (
              <a
                href={project.links.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 font-semibold text-sm shadow-lg hover:shadow-xl"
              >
                <span>Visit Live</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  const featuredProjects = filteredProjects.filter(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star size={16} />
            Portfolio Showcase
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-yellow-600 bg-clip-text text-transparent pb-6 leading-tight">
            My Projects
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting digital solutions that make a difference. From work projects to personal experiments,
            here's a showcase of my journey in building meaningful software.
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg">
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mr-3">
              <Filter size={18} />
              Explore by:
            </div>
            {filters.map((filter) => {
              const IconComponent = filter.icon
              return (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedFilter === filter.key
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-600 hover:scale-105 shadow-sm'
                  }`}
                >
                  <IconComponent size={16} />
                  {filter.label} ({filter.count})
                </button>
              )
            })}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 lg:ml-auto">
            <span className="text-sm font-semibold text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
            >
              <option value="year">Year (Newest First)</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Featured Projects */}
        {selectedFilter === 'all' && featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
              <span>Featured Projects</span>
              <div className="flex items-center gap-1 text-orange-600">
                <Star size={20} fill="currentColor" />
              </div>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* All/Other Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
              <span>
                {selectedFilter === 'all' ? 'All Projects' : filters.find(f => f.key === selectedFilter)?.label + ' Projects'}
              </span>
            </div>
            <span className="text-xl text-gray-500 font-normal">({filteredProjects.length})</span>
          </h2>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter size={48} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No projects found</h3>
              <p className="text-gray-600 text-lg">Try adjusting your filters to discover more projects.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {(selectedFilter === 'all' ? otherProjects : filteredProjects).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-orange-600 mb-2">{projects.length}</div>
            <div className="text-sm font-medium text-gray-600">Total Projects</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-green-600 mb-2">{projects.filter(p => p.status === 'live').length}</div>
            <div className="text-sm font-medium text-gray-600">Live & Active</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-purple-600 mb-2">{projects.filter(p => p.type === 'work').length}</div>
            <div className="text-sm font-medium text-gray-600">Work Projects</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">{new Set(projects.flatMap(p => p.techStacks)).size}</div>
            <div className="text-sm font-medium text-gray-600">Technologies</div>
          </div>
        </div>
      </div>

      {/* Enhanced Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm" onClick={() => setZoomedImage(null)}>
          <div className="relative max-w-7xl w-full mx-4">
            <button
              className="absolute -top-12 right-0 text-white bg-gray-800/70 rounded-full p-3 hover:bg-gray-700/70 transition-all duration-200 hover:scale-110"
              onClick={() => setZoomedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed project screenshot"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
