import { LogbookEntry as LogbookEntryType } from 'types/graphql'

const LogbookEntry = ({ entry }: { entry: LogbookEntryType }) => {
  return (
    <div className="prose">
      <p className="font-bold uppercase prose prose-sm">
        {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
          new Date(entry.date)
        )}
      </p>

      {/* <p className="ml-4">
        <span>Supervisor's Comments: </span>
        {entry.industrySupervisorComments}
      </p> */}
      {/*
      <p className="ml-4">
        <span>Student's Comments: </span> {entry.studentComments}
      </p> */}

      <table>
        <tr>
          <td>
            <p className="ml-4">
              <span className="uppercase text-xs font-medium">
                Supervisor's Comments:
              </span>
              <span className="ml-4">{entry.industrySupervisorComments}</span>
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p className="ml-4">
              <span className="uppercase text-xs font-medium">
                Student's Comments:
              </span>
              <span className="ml-4">{entry.studentComments}</span>
            </p>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default LogbookEntry
