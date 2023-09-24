import {
  ImageField,
  ModuleFields,
  RepeatedFieldGroup,
  TextField,
  FieldGroup,
  BooleanField
} from '@hubspot/cms-components/fields'

import '../../styles/tailwind.css'

export const meta = {
  label: 'Side by side feature preview with column reverse options',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/object-ungroup.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="A better workflow"
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading"
      default="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione."
      required
    />
    <RepeatedFieldGroup
      name="features"
      label="Features"
      occurrence={{ min: 1, max: 2 }}
      default={[
        {
          icon: {
            src: 'https://hubspot.com/hubfs/Brand/_icons/hubspot%20show%20product%20icon.svg',
            alt: 'hubspot show product icon',
            loading: 'lazy'
          },
          denomination: 'Push to deploy',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'
        }
      ]}
      required
    >
      <ImageField
        name="icon"
        label="Feature icon"
        default={{
          src: 'https://hubspot.com/hubfs/Brand/_icons/hubspot%20show%20product%20icon.svg',
          alt: 'hubspot show product icon',
          loading: 'lazy'
        }}
        required
      />
      <TextField
        name="denomination"
        label="Feature name"
        default="Push to deploy"
        required
      />
      <TextField
        name="description"
        label="Feature description"
        default="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
        required
      />
    </RepeatedFieldGroup>
    <ImageField
      name="featured_image"
      label="Featured image"
      default={{
        src: 'https://hubspot.com/hubfs/App%20previews/hubspot%20app%20deliver%20screenshot%20preview%20start%20for%20free.png',
        alt: 'hubspot app preview screenshot',
        loading: 'lazy'
      }}
      required
    />
    <FieldGroup name="styles" tab="STYLE" label="Styles">
      <BooleanField
        name="reverse_columns"
        label="Reverse columns?"
        default={false}
      />
    </FieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <h2>
                {props.fieldValues.heading}
              </h2>
              <p>
                {props.fieldValues.sub_heading}
              </p>
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
                    {'. '}
                    <dd>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
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
