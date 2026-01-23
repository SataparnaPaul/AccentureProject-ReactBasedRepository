const LoadingState = ({ label = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  )
}

export default LoadingState
