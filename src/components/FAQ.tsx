import React, { Fragment, useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"

import FAQData from "./data/faq.json"
import { useTranslation } from "next-i18next"

const FAQPage = () => {
  const { t } = useTranslation("common")

  const [open, setOpen] = useState(0)

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <div className="flex h-auto bg-black">
      <div className="m-auto text-center w-[60%]">
        <p className="text-4xl font-bold text-white my-4">
          {t("Frequently Asked Questions")}
        </p>

        <Fragment>
          {FAQData?.data.map((faq, idx) => (
            // @ts-ignore
            <Accordion key={idx} open={open === faq.id} className="my-4">
              {/* @ts-ignore */}
              <AccordionHeader
                onClick={() => handleOpen(faq.id)}
                className="bg-gray-800 p-5 mb-2 text-white hover:text-white border-0"
              >
                {t(faq.question)}
              </AccordionHeader>
              <AccordionBody>
                {faq.answer.map((ans, idx) => (
                  <p key={idx} className="text-justify text-white text-xl px-5">
                    {t(ans)}
                  </p>
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </Fragment>

        {/* <div className='flex justify-center'>
                <button type="button" className="flex items-center justify-center focus:outline-none text-white text-center bg-[#ff1e1e] rounded text-xl mb-2 mt-4 p-4 w-[335px] h-[60px]">
                  Restart Your Membership &gt;
                </button>
              </div> */}
      </div>
    </div>
  )
}

export default FAQPage
