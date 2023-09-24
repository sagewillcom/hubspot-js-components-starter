import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default function FaqsWithDropdowns({ props }) {
  return (
    <div>
      <div>
        <div>
          <h2>
            Frequently asked questions
          </h2>
          <dl>
            {props.fieldValues.faqs.map((faq, faqIndex) => (
              <Disclosure
                as="div"
                key={`${faqIndex}-${faq.question}`}
               
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button>
                        <h3>
                          {faq.question}
                        </h3>
                        <span>
                          {open ? (
                            <MinusSmallIcon
                             
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                             
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd">
                      <p>
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
