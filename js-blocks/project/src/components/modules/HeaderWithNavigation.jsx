import { ModuleFields, LogoField } from '@hubspot/cms-components/fields'
import { Island } from '@hubspot/cms-components'
import NavigationWithFlyouts from '../islands/NavigationWithFlyouts.jsx?island'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Header with navigation',
  is_available_for_new_content: false,
  inline_help_text:
    'This all-in-one module is used for the header of the website only.',
  master_language: 'en',
  categories: ['HEADERS']
}

export const fields = (
  <ModuleFields>
    <LogoField
      label="Logo"
      name="header_logo"
      default={{
        src: 'https://hubspot.com/hubfs/Brand/hubspot%20official%20logo%20vector.svg',
        alt: 'hubspot official vector logo'
      }}
      required
    />
  </ModuleFields>
)

export function Component(props) {
  return <Island module={NavigationWithFlyouts} props={props} />
}
