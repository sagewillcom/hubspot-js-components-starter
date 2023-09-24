import {
  ModuleFields,
  ImageField,
  RepeatedFieldGroup,
  UrlField,
  FieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'
import { logoCloudWithBottomCtaDefault } from '../../mocks/defaults/modules.js'

export const meta = {
  label: 'Logo cloud with bottom CTA',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/building.svg',
  global: true
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="logos"
      label="Logos"
      occurrence={{ min: 3, max: 6 }}
      default={logoCloudWithBottomCtaDefault}
      required
    >
      <ImageField
        name="image"
        label="Logo image"
        default={{
          src: 'https://hubspot.com/img/logos/158x48/transistor-logo-gray-900.svg',
          alt: 'transistor logo',
          loading: 'lazy'
        }}
      />
    </RepeatedFieldGroup>
    <FieldGroup
      name="bottom_cta"
      label="CTA"
      default={{
        cta_link_anchor: 'See the pricing page',
        cta_link_url: {
          href: 'https://hubspot.com/pricing'
        }
      }}
      required
    >
      <TextField
        name="prefix"
        label="CTA prefix"
        default="hubspot integrates with the marketing tools that matter to you."
        required
      />
      <TextField
        name="link_anchor"
        label="CTA anchor"
        default="See the pricing"
        required
      />
      <UrlField
        name="link_url"
        label="CTA link"
        default={{ href: 'https://hubspot.com/pricing' }}
        required
      />
    </FieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        {props.fieldValues.logos.map((logo, logoIndex) => (
          <img
            key={`${logoIndex}-${logo.image.alt}`}

            src={logo.image.src}
            alt={logo.image.alt}
            loading={logo.image.loading}
          />
        ))}
      </div>
      <div>
        <p>
          <span>
            {props.fieldValues.bottom_cta.prefix}
          </span>
          <a
            href={props.fieldValues.bottom_cta.link_url.href}

          >
            <span aria-hidden="true" />{' '}
            {props.fieldValues.bottom_cta.link_anchor}{' '}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  )
}
