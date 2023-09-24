import {
  ImageField,
  ModuleFields,
  TextField,
  FileField
} from '@hubspot/cms-components/fields'
// import your own CTA button
// import CustomButton from '../elements/CustomButton.jsx'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Hero with app preview on the right',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/star.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Deploy to the cloud with confidence"
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading"
      default="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua. Qui irure qui lorem cupidatat commodo."
      required
    />
    {/* Lottie / image conditional can be handled better */}
    <FileField name="lottie" label="Lottie file" />
    <ImageField
      name="featured_image"
      label="Featured image"
      default={{
        src: 'https://hubspot.com/hubfs/App%20previews/hubspot%20app%20deliver%20screenshot%20preview%20start%20for%20free.png',
        alt: 'hubspot app screenshot preview',
        loading: 'lazy'
      }}
    />
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <div>
          <h1>
            {props.fieldValues.heading}
          </h1>
          <p>
            {props.fieldValues.sub_heading}
          </p>
          <div>
            {/* <CustomButton /> */}
          </div>
        </div>
        {props.fieldValues.lottie ? (
          <div
            dangerouslySetInnerHTML={{
              __html: `<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
              <dotlottie-player
                src="${props.fieldValues.lottie}"
                background="transparent"
                speed="1"
                style="max-width: 500px; max-height: 500px;"
                direction="1"
                mode="normal"
                loop
                autoplay
              ></dotlottie-player>`
            }}
          />
        ) : (
          <div>
            <div>
              <div>
                <img
                  src={props.fieldValues.featured_image.src}
                  alt={props.fieldValues.featured_image.alt}
                 
                  loading={props.fieldValues.featured_image.loading}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
