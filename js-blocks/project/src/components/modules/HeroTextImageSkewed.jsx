import {
  ImageField,
  ModuleFields,
  TextField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Hero with text and image skewed',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/star.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="We're building the platform for ultimate content strategy."
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading"
      default="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo."
      required
    />
    <ImageField
      name="featured_image"
      label="Featured image"
      default={{
        src: 'https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80',
        alt: 'arrigo lupori and francesco carpita hubspot co-founders',
        loading: 'lazy'
      }}
      required
    />
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <h1>
        {props.fieldValues.heading}
      </h1>
      <div>
        <p>
          {props.fieldValues.sub_heading}
        </p>
      </div>
      <img
        src={props.fieldValues.featured_image.src}
        alt={props.fieldValues.featured_image.alt}
        loading={props.fieldValues.featured_image.loading}

      />
    </div>
  )
}
