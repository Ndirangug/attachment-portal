const ExperienceEntry = ({ entry }) => {
  return (
    <div className="px-5 py-5 mb-1">
      <h6 className="font-bold uppercase">{entry.position}</h6>
      <p className="italic font-medium text-gray-600 text-sm">
        {entry.company}
      </p>
      <p className="italic font-medium text-gray-600 text-sm">
        {entry.duration}
      </p>
      <p className="mt-2 text-base">{entry.description}</p>
    </div>
  )
}

export default ExperienceEntry
