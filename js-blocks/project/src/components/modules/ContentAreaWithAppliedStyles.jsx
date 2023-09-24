import { ModuleFields, RichTextField } from '@hubspot/cms-components/fields'
import HtmlContentWrapper from '../elements/wrappers/HtmlContentWrapper.jsx'
import { contentAreaDefault } from '../../mocks/defaults/modules.js'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Text area with applied styles',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/newspaper.svg'
}

export const fields = (
  <ModuleFields>
    <RichTextField
      name="html_content"
      label="Content"
      enabledFeatures={[
        'bold',
        'italic',
        'link',
        'anchor',
        'cta',
        'video',
        'table',
        'embed',
        'bulleted_list',
        'numbered_list',
        'strikethrough',
        'source_code'
      ]}
      default={contentAreaDefault}
      required
    />
  </ModuleFields>
)

export function Component(props) {
  return <HtmlContentWrapper richText={props.fieldValues.html_content} />
}
