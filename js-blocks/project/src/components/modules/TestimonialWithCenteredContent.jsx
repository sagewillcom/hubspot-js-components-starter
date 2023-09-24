import {
  FieldGroup,
  ImageField,
  ModuleFields,
  TextField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Testimonial with centered content',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/face-grin-stars.svg',
  global: true
}

export const fields = (
  <ModuleFields>
    <TextField
      name="testimonial_quote"
      label="Customer quote"
      default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis."
      required
    />
    <FieldGroup name="testimonial_author" label="Customer details">
      <ImageField
        name="portrait"
        label="Portrait"
        default={{
          src: 'https://hubspot.com/hubfs/Portraits/arrigo%20small.jpg',
          alt: 'arrigo lupori hubspot co-founder portrait',
          loading: 'lazy'
        }}
        required
      />
      <TextField
        name="full_name"
        label="Full name"
        default="Judith Black"
        required
      />
      <TextField
        name="job_title"
        label="Job title"
        default="CEO of Workcation"
        required
      />
    </FieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <figure>
        <blockquote>
          <p>
            “{props.fieldValues.testimonial_quote}”
          </p>
        </blockquote>
        <figcaption>
          <img

            src={props.fieldValues.testimonial_author.portrait.src}
            alt={props.fieldValues.testimonial_author.portrait.alt}
            loading={props.fieldValues.testimonial_author.portrait.loading}
          />
          <div>
            <div>
              {props.fieldValues.testimonial_author.full_name}
            </div>
            <svg
              viewBox="0 0 2 2"
              width={3}
              height={3}
              aria-hidden="true"

            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div>
              {props.fieldValues.testimonial_author.job_title}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
