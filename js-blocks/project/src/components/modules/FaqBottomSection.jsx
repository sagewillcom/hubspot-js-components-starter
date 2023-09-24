import { Island } from '@hubspot/cms-components'
import FaqsWithDropdowns from '../islands/FaqsWithDropdowns.jsx?island'
import {
  ModuleFields,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'
import { faqBottomSectionDefault } from '../../mocks/defaults/modules.js'

export const meta = {
  label: 'Bottom FAQ section with dropdowns',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/rectangle-list.svg',
  global: true
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="faqs"
      label="FAQs"
      occurrence={{ min: 2, max: 4 }}
      default={faqBottomSectionDefault}
      required
    >
      <TextField
        name="question"
        label="Question"
        default="What's the best thing about Switzerland?"
        required
      />
      <TextField
        name="answer"
        label="Answer"
        default="I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
        required
      />
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return <Island module={FaqsWithDropdowns} props={props} />
}
