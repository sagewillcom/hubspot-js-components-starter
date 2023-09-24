import {
  ModuleFields,
  TextField,
  FieldGroup,
  BooleanField,
  ChoiceField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Heading with sub-heading',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/chart-bar.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Support center"
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading"
      default="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua."
      required
    />
    <FieldGroup name="styles" tab="STYLE" label="Styles">
      <BooleanField name="align_center" label="Align center?" default={false} />
      <ChoiceField
        name="heading_size"
        label="Heading size"
        choices={[
          ['large', 'Large'],
          ['medium', 'Medium'],
          ['small', 'Small']
        ]}
        default="large"
      />
    </FieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <h2>
          {props.fieldValues.heading}
        </h2>
        <p>
          {props.fieldValues.sub_heading}
        </p>
      </div>
    </div>
  )
}
