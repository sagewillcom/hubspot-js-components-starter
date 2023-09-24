import { LogoField, ModuleFields } from '@hubspot/cms-components/fields'
import { footerMenuMock } from '../../mocks/functions/menus.js'
import { getIsDeployed } from '@hubspot/cms-components'
import '../../styles/tailwind.css'

const newDate = new Date()
const currentYear = newDate.getFullYear()

export const meta = {
  label: 'Footer with columns',
  is_available_for_new_content: false,
  inline_help_text:
    'This all-in-one module is used for the footer of the website only.',
  master_language: 'en',
  categories: ['FOOTERS']
}

export const fields = (
  <ModuleFields>
    <LogoField
      label="Logo"
      name="footer_logo"
      default={{
        src: 'https://hubspot.com/hubfs/Brand/hubspot%20official%20logo%20vector.svg',
        alt: 'hubspot official vector logo'
      }}
      required
    />
  </ModuleFields>
)

export function Component(props) {
  let footerMenu = footerMenuMock
  if (getIsDeployed()) {
    footerMenu = props.hublParameters.footer_menu
  }
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading">
        Footer
      </h2>
      <div>
        <div>
          <div>
            <img

              src={props.fieldValues.footer_logo.src}
              alt={props.fieldValues.footer_logo.alt}
            />
            <p>
              Lorem ipsum dolor.
            </p>
            <div>
              <a
                href="https://www.linkedin.com/company/hubspot"

                target="_blank"
              >
                <span>LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#558574"

                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div>
              {footerMenu.children.slice(0, 2).map((column, columnIndex) => (
                <div

                  key={`${columnIndex}-${column.label}`}
                >
                  <h3>
                    {column.label}
                  </h3>
                  <ul role="list">
                    {column.children.map((navItem, navItemIndex) => (
                      <li key={`${navItemIndex}-${navItem.label}`}>
                        <a
                          href={navItem.url}

                        >
                          {navItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              {footerMenu.children.slice(2).map((column, columnIndex) => (
                <div

                  key={`${columnIndex}-${column.label}`}
                >
                  <h3>
                    {column.label}
                  </h3>
                  <ul role="list">
                    {column.children.map((navItem, navItemIndex) => (
                      <li key={`${navItemIndex}-${navItem.label}`}>
                        <a
                          href={navItem.url}

                        >
                          {navItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p>
            &copy; {currentYear} your company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
