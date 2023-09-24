import {
  RepeatedFieldGroup,
  ModuleFields,
  TextField,
  ImageField
} from '@hubspot/cms-components/fields'
import '../../styles/tailwind.css'
import { sbsTeamMembersDefault } from '../../mocks/defaults/modules.js'

export const meta = {
  label: 'Side by side team members',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/object-ungroup.svg'
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="team_members"
      label="Team members"
      occurrence={{ min: 2, max: 4 }}
      default={sbsTeamMembersDefault}
      required
    >
      <ImageField
        name="portrait"
        label="Portrait"
        default={{
          src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          alt: 'hubspot team member',
          loading: 'lazy'
        }}
        required
      />
      <TextField
        name="full_name"
        label="Full name"
        default="Jane Cooper"
        required
      />
      <TextField
        name="job_title"
        label="Job title"
        default="Sales Director"
        required
      />
      <TextField
        name="biography"
        label="Biography"
        default="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
        required
      />
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <ul
        role="list"

      >
        {props.fieldValues.team_members.map((member, memberIndex) => (
          <li
            key={`${memberIndex}-${member.full_name}`}

          >
            <img

              src={member.portrait.src}
              alt={member.portrait.alt}
              loading={member.portrait.loading}
            />
            <div>
              <h3>
                {member.full_name}
              </h3>
              <p>
                {member.job_title}
              </p>
              <p>
                {member.biography}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
