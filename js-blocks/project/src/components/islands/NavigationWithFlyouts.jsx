import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import your own custom button used as main CTA
// import { CustomButton } from '../elements/CustomButton.jsx'
import { headerMenuMock } from '../../mocks/functions/menus.js'
import { getIsDeployed } from '@hubspot/cms-components'
import {
  // Import your own icons
} from '../elements/icons/index.jsx'

export default function NavigationWithFlyouts({ props }) {
  let headerMenu = headerMenuMock

  if (getIsDeployed()) {
    headerMenu = props.hublParameters.header_menu
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // The code below is terrible (hardcoded) as it was one of the first things I tried to do in the CMS.
  // Instead of doing this, you should create a RepeatableFieldGroup object in your module fields.

  function switchDropdownNavItemLabel(dropdownNavItemLabel) {
    switch (dropdownNavItemLabel) {
      case 'X':
        return 'Lorem ipsum dolor.'
      case 'Y':
        return 'Lorem ipsum dolor.'
      case 'Z':
        return 'Lorem ipsum dolor.'
    }
  }

  function switchDropdownNavItemIcon(dropdownNavItemLabel) {
    switch (dropdownNavItemLabel) {
      case 'X':
      // return <Icon1 />
      case 'Y':
      // return <Icon2 />
      case 'Z':
      // return <Icon3 />
    }
  }

  function handleDropdownNavItemHover(dropdownNavItem) {
    switch (dropdownNavItem.label) {
      case 'X':
        setDropdownSubNavItems(dropdownNavItem.children)
      case 'Y':
        setDropdownSubNavItems(dropdownNavItem.children)
      case 'Z':
        setDropdownSubNavItems(dropdownNavItem.children)
    }
  }

  return (
    <header>
      <nav

        aria-label="Global"
      >
        <div>
          <a href="/">
            <span>hubspot</span>
            <img

              src={props.fieldValues.header_logo.src}
              alt={props.fieldValues.header_logo.alt}
            />
          </a>
        </div>
        <div>
          <button
            type="button"

            onClick={() => setMobileMenuOpen(true)}
          >
            <span>Open main menu</span>
            <Bars3Icon aria-hidden="true" />
          </button>
        </div>
        <Popover.Group>
          {headerMenu.children.map((rootNavItem, rootNavItemIndex) =>
            rootNavItem.children.length >= 1 ? (
              <Popover
                key={`${rootNavItemIndex}-${rootNavItem.label}`}

              >
                <Popover.Button>
                  {rootNavItem.label}
                  <ChevronDownIcon

                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel

                  >
                    <div>
                      {rootNavItem.children.map(
                        (dropdownNavItem, dropdownNavItemIndex) => (
                          <div
                            key={`${dropdownNavItemIndex}-${dropdownNavItem.label}`}
                            onMouseEnter={() =>
                              handleDropdownNavItemHover(dropdownNavItem)
                            }
                          >
                            <div>
                              {switchDropdownNavItemIcon(dropdownNavItem.label)}
                            </div>
                            <div>
                              <a
                                href={dropdownNavItem.url}

                              >
                                {dropdownNavItem.label}
                                <span />
                              </a>
                              <p>
                                {switchDropdownNavItemLabel(
                                  dropdownNavItem.label
                                )}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>

                  </Popover.Panel>
                </Transition>
              </Popover>
            ) : (
              <a
                href={rootNavItem.url}
                key={rootNavItem.label}

              >
                {rootNavItem.label}
              </a>
            )
          )}
        </Popover.Group>
        <div>
          {/* <CustomButton /> */}
        </div>
      </nav>
      <Dialog
        as="div"

        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div />
        <Dialog.Panel>
          <div>
            <div>
              <a href="#">
                <span>hubspot</span>
                <img

                  src={props.fieldValues.header_logo.src}
                  alt={props.fieldValues.header_logo.alt}
                />
              </a>
              <button
                type="button"

                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Close menu</span>
                <XMarkIcon aria-hidden="true" />
              </button>
            </div>
            <div>
              <div>
                <div>
                  {headerMenu.children.map(
                    (rootNavItem, dropdownNavItemIndex) =>
                      rootNavItem.children.length >= 1 &&
                      rootNavItem.children.map((dropdownNavItem) => (
                        <a
                          key={`${dropdownNavItemIndex}-${dropdownNavItem.label}`}
                          href={dropdownNavItem.url}

                        >
                          <div>
                            {switchDropdownNavItemIcon(dropdownNavItem.label)}
                          </div>
                          {dropdownNavItem.label}
                        </a>
                      ))
                  )}
                </div>
                <div>
                  {headerMenu.children.map(
                    (rootNavItem, rootNavItemIndex) =>
                      rootNavItem.children.length === 0 && (
                        <a
                          key={`${rootNavItemIndex}-${rootNavItem.label}`}
                          href={rootNavItem.url}

                        >
                          {rootNavItem.label}
                        </a>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
