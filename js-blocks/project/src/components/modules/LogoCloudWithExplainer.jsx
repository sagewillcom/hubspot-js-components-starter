import {
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import { logoCloudWithExplainerDefault } from '../../mocks/defaults/modules.js'

import '../../styles/tailwind.css'

export const meta = {
  label: 'Logo cloud with explainer',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/building.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Trusted by the most innovative teams"
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading"
      default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue."
      required
    />
    <RepeatedFieldGroup
      name="logos"
      label="Logos"
      occurrence={{ min: 3, max: 6 }}
      default={logoCloudWithExplainerDefault}
      required
    >
      <ImageField
        name="image"
        label="Logo image"
        default={{
          src: 'https://hubspot.com/img/logos/tuple-logo-gray-900.svg',
          alt: 'default logo alt',
          loading: 'lazy'
        }}
      />
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <div>
          <h2>
            {props.fieldValues.heading}
          </h2>
          <p>
            {props.fieldValues.sub_heading}
          </p>
          <div>
            <a
              href="#"
             
            >
              Create account
            </a>
            <a
              href="#"
             
            >
              Contact us <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div>
          {props.fieldValues.logos.map((logo, logoIndex) => (
            <img
              key={`${logoIndex}-${logo.image.alt}`}
              src={logo.image.src}
              alt={logo.image.alt}
              loading={logo.image.loading}
              width={105}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
