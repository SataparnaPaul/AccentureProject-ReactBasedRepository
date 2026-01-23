const ErrorState = ({ message }) => {
  return (
    <div className="rounded-3xl border border-rose-400/40 bg-rose-500/10 px-6 py-8 text-center">
      <p className="text-sm font-semibold text-rose-200">Something went wrong</p>
      <p className="mt-2 text-sm text-rose-100">{message}</p>
    </div>
  )
}

export default ErrorState
