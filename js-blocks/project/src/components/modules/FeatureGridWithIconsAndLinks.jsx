import {
  ModuleFields,
  RepeatedFieldGroup,
  ImageField,
  TextField,
  UrlField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'
import { featureGridWithIconsAndLinksDefault } from '../../mocks/defaults/modules.js'

export const meta = {
  label: 'Feature grid with icons and links',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/calendar-days.svg'
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="features"
      label="Features"
      occurrence={{ min: 3, max: 6 }}
      default={featureGridWithIconsAndLinksDefault}
      required
    >
      <ImageField
        name="icon"
        label="Feature icon"
        default={{
          src: 'https://hubspot.com/hubfs/Brand/_icons/sagewil%20roi%20reports%20feature%20icon.svg',
          alt: 'hubspot team member',
          loading: 'lazy'
        }}
        required
      />
      <TextField
        name="denomination"
        label="Feature name"
        default="Brand stories"
        required
      />
      <TextField
        name="description"
        label="Feature description"
        default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
        required
      />
      <UrlField name="link" label="Feature link" />
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <dl>
        {props.fieldValues.features.map((feature, featureIndex) => (
          <div
            key={`${featureIndex}-${feature.denomination}`}

          >
            <dt>
              <img
                src={feature.icon.src}
                alt={feature.icon.alt}
                loading={feature.icon.loading}

              />
              {feature.denomination}
            </dt>
            <dd>
              <p>{feature.description}</p>
              {feature?.link?.href && (
                <p>
                  <a
                    href={feature.link.href}

                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
