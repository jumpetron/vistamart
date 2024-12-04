import React from 'react'

//internal import
import Layout from '@layout/Layout'
import useGetSetting from '@hooks/useGetSetting'
import PageHeader from '@components/header/PageHeader'
import CMSkeleton from '@components/preloader/CMSkeleton'
import useUtilsFunction from '@hooks/useUtilsFunction'

const TermAndConditions = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting()
  const { showingTranslateValue } = useUtilsFunction()

  return (
    <Layout
      title="Terms & Conditions"
      description="This is terms and conditions page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.term_and_condition?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.term_and_condition?.title
        )}
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <h1>
            <strong>Welcome to vistamart!</strong>
          </h1>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of vistamart's Website, located at https://vistamart.com/. By
            accessing this website we assume you accept these terms and
            conditions. Do not continue to use vistamart if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements: Client,
            You and Your refers to you, the person log on this website and
            compliant to the Company’s terms and conditions. The Company, refers
            to our CompanyPartParties or Us refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
          <h1>
            <strong>Cookies</strong>
          </h1>
          <p>
            We employ the use of cookies. By accessing vistamart, you agreed to
            use cookies in agreement with the vistamart's Privacy Policy. Most
            interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
          <h1>
            <strong>License</strong>
          </h1>
          <p>
            Unless otherwise stated, vistamart and/or its licensors own the
            intellectual property rights for all material on vistamart. All
            intellectual property rights are reserved. You may access this from
            vistamart for your own personal use subjected to restrictions set in
            these terms and conditions.This Agreement shall begin on the date
            hereof. Our Terms and Conditions were created with the help of the
            Terms And Conditions Generator.<strong>You must not:</strong>
          </p>
          <ul>
            <li>
              1. Identifiers (e.g. name, mailing address, email address, phone
              number, credit/debit card number)
            </li>
            <li>
              2. Characteristics of protected classifications (e.g. gender, age)
            </li>
            <li>
              3. Commercial information (e.g. products or services purchased,
              purchase history)
            </li>
            <li>
              4. Internet or other electronic network activity (e.g. browse or
              search history)
            </li>
            <li>5. Geo location data (e.g. latitude or longitude)</li>
            <li>
              6. Audio, electronic, visual, or similar information (e.g.
              recording of Guest service calls)
            </li>
            <li>
              7. Inferences drawn from any of the above (e.g. preferences or
              characteristics)
            </li>
          </ul>
          <p>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            vistamart does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and
            opinions of vistamart,its agents and/or affiliates. Comments reflect
            the views and opinions of the person who post their views and
            opinions. To the extent permitted by applicable laws, vistamart
            shall not be liable for the Comments or for any liability, damages
            or expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </p>
          <h1>
            <strong>Content Liability</strong>
          </h1>
          <p>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.Without prior approval
            and written permission, you may not create frames around our
            Webpages that alter in any way the visual presentation or appearance
            of our Website.
          </p>
          <h1>
            <strong>Your Privacy</strong>
          </h1>
          <p>
            Please read{' '}
            <a
              href="https://vistamart-store.vercel.app/privacy-policy\"
              target="_self"
            >
              Privacy Policy
            </a>
          </p>
          <h1>
            <strong>Reservation of Rights</strong>
          </h1>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
          <h1>
            <strong>Disclaimer</strong>
          </h1>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul>
            <li>
              1. limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              2. limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              3. limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              4. exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty. As long as the website and the
            information and services on the website are provided free of charge,
            we will not be liable for any loss or damage of any nature.
          </p>
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          {/* <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:terms-condition-cookies")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:terms-condition-cookies-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:terms-condition-license")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:terms-condition-license-docs")}</p>

              <ul>
                <strong className="mb-2">
                  {" "}
                  {t("common:terms-condition-license-docs0")}
                </strong>
                <li>{t("common:terms-condition-license-docs1")}</li>
                <li>{t("common:terms-condition-license-docs2")}</li>
                <li>{t("common:terms-condition-license-docs3")}</li>
                <li>{t("common:terms-condition-license-docs4")}</li>
                <li> {t("common:terms-condition-license-docs5")}</li>
                <li>{t("common:terms-condition-license-docs6")}</li>
                <li>{t("common:terms-condition-license-docs7")}</li>
              </ul>
              <p>{t("common:terms-condition-license-docs8")}</p>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-liability")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-liability-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-privacy")}
              </h2>
              <div className="font-sans leading-7">
                <p>
                  {t("common:terms-condition-privacy-docs1")}
                  <Link href="/privacy-policy" className="text-emerald-500">
                 
                      {t("common:terms-condition-privacy-docs2")}
               
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-rights")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-rights-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-website")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-website-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-disclaimer")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-disclaimer-docs")}</p>
                <ul>
                  <li>{t("common:terms-condition-disclaimer-docs1")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs2")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs3")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs4")}</li>
                </ul>
                <p>{t("common:terms-condition-disclaimer-docs5")}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default TermAndConditions
