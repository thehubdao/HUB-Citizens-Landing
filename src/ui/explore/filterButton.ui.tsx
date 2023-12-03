interface FilterButtonUIProps {
  label: string;
}

export default function FilterButtonUI({ label }: FilterButtonUIProps) {
  return (
    <button className={`h-11 w-56 text-ctz-dark text-base leading-3 border-2 border-ctz-light flex items-center justify-center`}>
      <p className="hidden sm:flex w-fit text-center">{label.toUpperCase()}</p>
      <p className="flex sm:hidden w-fit text-center">{label[0].toUpperCase()}</p>
    </button>
  )
}