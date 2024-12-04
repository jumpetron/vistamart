import React from 'react'

//internal import
import Layout from '@layout/Layout'
import useGetSetting from '@hooks/useGetSetting'
import PageHeader from '@components/header/PageHeader'
import CMSkeleton from '@components/preloader/CMSkeleton'
import useUtilsFunction from '@hooks/useUtilsFunction'

const PrivacyPolicy = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting()
  const { showingTranslateValue } = useUtilsFunction()
  // console.log("data", storeCustomizationSetting);

  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      <PageHeader
        headerBg={storeCustomizationSetting?.privacy_policy?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.privacy_policy?.title
        )}
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <h1>
            <strong>Last updated: February 15, 2022</strong>
          </h1>
          <p>
            At vistamart, accessible from vistamart dot com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by vistamart and how we use it. If you have additional
            questions or require more information about our Privacy Policy, do
            not hesitate to contact us.we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide. When you register for
            an Account, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in vistamart.we may receive
            additional information about you such as your name, email address,
            phone number, the contents of the message and/or attachments you may
            send us, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number. This policy is not applicable to any information collected
            offline or via channels other than this website. Our Privacy Policy
            was created with the help of the Free Privacy Policy Generator.
          </p>
          <h1>
            <strong>Consent</strong>
          </h1>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
          <h1>
            <strong>Information we collect</strong>
          </h1>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such may choose to provide. When you register for an Account, we may
            ask for your contact information, including items such as name,
            company name, address, email address, and telephone number.
          </p>
          <p>
            Please note that the Company will not ask you to share any sensitive
            data or information via email or telephone. If you receive any such
            request by email or telephone, please do not respond/divulge any
            sensitive data or information and forward the information relating
            to the same to
          </p>
          <h1>
            <strong>How we use your information</strong>
          </h1>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ol>
            <li>
              1. Provide, operate, and maintain our website, to provide you with
              updates and other information.
            </li>

            <li>
              2. Improve, personalize, and expand our website,and other
              information relating to the website.
            </li>

            <li>
              3. Understand and analyze how you use our website, to provide you
              with updates and other information relating to the website.
            </li>

            <li>
              4. Develop new products, services, features, and functionality,and
              other information relating to the website.
            </li>

            <li>
              5. Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates.
            </li>

            <li>
              6. Send you emails. To provide you with updates and other
              information relating to the website, and for marketing and
              promotional purposes
            </li>

            <li>
              7. Find and prevent fraud. To provide you with updates and other
              information relating to the website, and for marketing and
              promotional purposes
            </li>
          </ol>
          <h1>
            <strong>Log Files</strong>
          </h1>
          <p>
            vistamart follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting. The information collected by log
            files include internet protocol (IP) addresses, browser type,
            Internet Service Provider (ISP), date and time stamp, referring/exit
            pages, and possibly the number of clicks. These are not linked to
            any information that is personally identifiable. The purpose of the
            information is for analyzing trends, administering the site,
            tracking users' movement on the website, and gathering demographic
            information.
          </p>
          <h1>
            <strong>Advertising Partners Privacy Policies</strong>
          </h1>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of vistamart. Third-party ad servers or ad
            networks uses technologies like cookies, JavaScript, or Web Beacons
            that are used in their respective advertisements and links that
            appear on vistamart, which are sent directly to users' browser. They
            automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit. Note that vistamart has no
            access to or control over these cookies that are used by third-party
            advertisers.
          </p>
          <h1>
            <strong>Third Party Privacy Policies</strong>
          </h1>
          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on vistamart, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit. Note that vistamart has no access to or control over
            these cookies that are used by third-party advertisers.
          </p>
          <p>
            vistamart's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You can choose to disable cookies
            through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it
            can be found at the browsers' respective websites.
          </p>
          <h1>
            <strong>CCPA Privacy Rights</strong>
          </h1>
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer's
            personal data disclose the categories and specific pieces of
            personal data that a business has collected about consumers. Request
            that a business delete any personal data about the consumer that a
            business has collected. Request that a business that sells a
            consumer's personal data, not sell the consumer's personal data. If
            you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <h1>
            <strong>Children's Information</strong>
          </h1>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online
            activity.Request that a business delete any personal data about the
            consumer that a business has collected. If you make a request, we
            have one month to respond to you. If you would like to exercise any
            of these rights, please contact us.
          </p>
          <p>
            vistamart does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          <br />
          <CMSkeleton count={15} height={15} loading={loading} />
          {/* <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-consent")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-consent-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-information-docs1")}</p>
              <p>{t("common:privacy-policy-information-docs2")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-use-information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-use-information-docs")}</p>

              <ol>
                <li>{t("common:privacy-policy-use-information-docs1")}</li>
                <li>{t("common:privacy-policy-use-information-docs2")}</li>
                <li>{t("common:privacy-policy-use-information-docs3")}</li>
                <li>{t("common:privacy-policy-use-information-docs4")}</li>
                <li>{t("common:privacy-policy-use-information-docs5")}</li>
                <li>{t("common:privacy-policy-use-information-docs6")}</li>
                <li>{t("common:privacy-policy-use-information-docs7")}</li>
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-log-file")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-log-file-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-advertising")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-advertising-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-third-party")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-third-party-docs1")}</p>
              <p>{t("common:privacy-policy-third-party-docs2")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-ccpa-rights")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-ccpa-rights-docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:privacy-policy-children-information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:privacy-policy-children-information-docs1")}</p>
              <p>{t("common:privacy-policy-children-information-docs2")}</p>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
