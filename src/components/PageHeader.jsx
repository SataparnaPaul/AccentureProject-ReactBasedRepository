const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
        {subtitle}
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h1>
    </div>
  )
}

export default PageHeader
