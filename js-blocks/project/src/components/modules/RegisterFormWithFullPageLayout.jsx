import {
  HtmlField,
  ImageField,
  ModuleFields
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Register form with full page layout',
  is_available_for_new_content: false,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/user.svg',
  global: true
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo_image"
      label="Logo"
      default={{
        src: 'https://hubspot.com/hubfs/Brand/hubspot%20official%20logo%20light%20vector.svg',
        alt: 'hubspot official logo',
        loading: 'lazy'
      }}
    />
    <HtmlField
      name="form_embed"
      label="Form embed HTML"
      default={`your form embed html`}
      required
    />
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <img
         
          src={props.fieldValues.logo_image.src}
          alt={props.fieldValues.logo_image.alt}
          loading={props.fieldValues.logo_image.loading}
        />
        <h1>
          Register for a hubspot account
        </h1>
      </div>

      <div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: props.fieldValues.form_embed
            }}
          />
        </div>
        <p>
          Already registered?{' '}
          <a
            href="https://app.hubspot.com"
           
          >
            Go to login screen
          </a>
        </p>
      </div>
    </div>
  )
}
