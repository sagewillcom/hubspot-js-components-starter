import {
  ModuleFields,
  NumberField,
  TextField
} from '@hubspot/cms-components/fields'
import { Island } from '@hubspot/cms-components'
import BlogPostColumns from '../islands/BlogPostColumns.jsx?island'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Blog preview with three columns',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/images.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="From the blog"
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading"
      default="Learn how to grow your business with our expert advice."
      required
    />
    <NumberField name="limit" label="Limit" default={3} required />
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
      <Island module={BlogPostColumns} props={props} clientOnly />
    </div>
  )
}
