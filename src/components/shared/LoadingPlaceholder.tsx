interface LoadingPlaceholderProps {
  height?: string
  className?: string
}

export function LoadingPlaceholder({ height = 'h-96', className = '' }: LoadingPlaceholderProps) {
  return (
    <div className={`${height} animate-pulse bg-gradient-to-br from-zinc-800/20 to-zinc-700/20 rounded-lg ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent animate-shimmer" />
    </div>
  )
} 