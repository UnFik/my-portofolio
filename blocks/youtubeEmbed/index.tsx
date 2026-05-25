'use client'

interface YouTubeEmbedBlockData {
  url: string
}

interface YouTubeEmbedComponentProps {
  data: YouTubeEmbedBlockData
}

export const YouTubeEmbedComponent = ({ data }: YouTubeEmbedComponentProps) => {
  const { url } = data

  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }

    return null
  }

  const videoId = getYouTubeId(url)

  if (!videoId) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md">
        <p className="text-red-400">Invalid YouTube URL: {url}</p>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

export default YouTubeEmbedComponent
