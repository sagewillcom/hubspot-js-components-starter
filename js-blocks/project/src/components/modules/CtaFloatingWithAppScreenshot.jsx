import {
  ImageField,
  ModuleFields,
  TextField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'
// import your custom CTA button
// import { CustomButton } from '../elements/CustomButton.jsx'

export const meta = {
  label: 'Floating CTA with app screenshot',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/circle-dot.svg',
  global: true
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Boost your productivity, start using our app today."
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading"
      default="Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla."
      required
    />
    <ImageField
      name="featured_image"
      label="Featured image"
      default={{
        src: 'https://hubspot.com/hubfs/App%20previews/hubspot%20app%20deliver%20screenshot%20preview%20start%20for%20free.png',
        alt: 'hubspot app screenshot',
        loading: 'lazy'
      }}
    />
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <svg
          viewBox="0 0 1024 1024"

          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#72ba6c" />
              <stop offset={1} stopColor="#0f262c" />
            </radialGradient>
          </defs>
        </svg>
        <div>
          <h2>
            {props.fieldValues.heading}
          </h2>
          <p>
            {props.fieldValues.sub_heading}
          </p>
          <div>
            {/* <CustomButton /> */}
          </div>
        </div>
        <div>
          <img

            src={props.fieldValues.featured_image.src}
            alt={props.fieldValues.featured_image.alt}
            loading={props.fieldValues.featured_image.loading}
          />
        </div>
      </div>
    </div>
  )
}
