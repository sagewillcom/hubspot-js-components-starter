import {
  DateField,
  ModuleFields,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import { timelineWithDatesDefault } from '../../mocks/defaults/modules.js'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Timeline with dates',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/clock.svg'
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="entries"
      label="Timeline entries"
      occurrence={{ min: 4, max: 4 }}
      default={timelineWithDatesDefault}
      required
    >
      <TextField
        name="title"
        label="Title"
        default="Founded company"
        required
      />
      <TextField
        name="description"
        label="Description"
        default="Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae."
        required
      />
      <DateField name="date" label="Date" default={1693890423} required />
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        {props.fieldValues.entries.map((entry, entryIndex) => (
          <div key={`${entryIndex}-${entry.title}`}>
            <time
              dateTime={new Date(entry.date).toISOString().split('T')}

            >
              <svg
                viewBox="0 0 4 4"

                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {new Date(entry.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
              <div
                aria-hidden="true"
              />
            </time>
            <h3>
              {entry.title}
            </h3>
            <p>
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
