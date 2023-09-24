import {
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Integrations cloud with descriptions',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/square-check.svg',
  global: true
}

export const fields = (
  <ModuleFields>
    <TextField
      name="prefix"
      label="Prefix"
      default="hubspot integrates with the marketing tools that matter to you"
      required
    />
    <RepeatedFieldGroup
      name="integrations"
      label="Integrations"
      occurrence={{ min: 3, max: 6 }}
      default={Array(6).fill({
        denomination: 'WordPress',
        logo: {
          src: 'https://hubspot.com/hubfs/Logos/wordpress%20logo%20mark.svg',
          alt: 'wordpress hubspot integration logo',
          loading: 'lazy'
        },
        description:
          'Audit, schedule and publish content to WP directly from hubspot.'
      })}
      required
    >
      <TextField
        name="denomination"
        label="Name"
        default="WordPress"
        required
      />
      <ImageField
        name="logo"
        label="Logo"
        default={{
          src: 'https://hubspot.com/hubfs/Logos/wordpress%20logo%20mark.svg',
          alt: 'wordpress hubspot integration logo',
          loading: 'lazy'
        }}
        required
      />
      <TextField
        name="description"
        label="Description"
        default="Audit, schedule and publish content to WP directly from hubspot."
        required
      />
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <p>
        {props.fieldValues.prefix}
      </p>
      <div>
        {props.fieldValues.integrations.map((integration, integrationIndex) => (
          <div>
            <div
              key={`${integrationIndex}-${integration.logo.alt}`}
             
            >
              <img
                src={integration.logo.src}
                alt={integration.logo.alt}
                loading={integration.logo.loading}
               
              />
              <div>
                <p>
                  {integration.denomination}
                </p>
                <p>
                  {integration.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
