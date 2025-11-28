import React from "react";
import { Helmet } from "react-helmet";

const TermsCondition = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions</title>
      </Helmet>
      <div className="flex flex-col items-center  p-6 min-h-screen">
        <div className="w-full max-w-4xl   rounded-lg p-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-center text-primary">
            Terms and Conditions
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Introduction
            </h2>
            <p className="text-gray-700">
              Welcome to HelpHive! We are excited to have you join our platform,
              a space dedicated to connecting volunteers with opportunities to
              make a difference. By accessing or using our website, you agree to
              adhere to the terms and conditions outlined below. These terms
              ensure a secure, positive, and equitable environment for all
              users. Whether you are posting opportunities, volunteering, or
              exploring opportunities, we encourage you to follow these
              guidelines. Please read these terms carefully as they define your
              rights, responsibilities, and the rules governing your use of
              HelpHive. By continuing to use our site, you signify your
              agreement to these terms. If you have any questions or concerns,
              feel free to contact us at support@helphive.com. Let’s work
              together to create a thriving community of support and service.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              User Responsibilities
            </h2>
            <p className="text-gray-700">
              Users of HelpHive are expected to maintain integrity and respect
              while interacting on the platform. This includes, but is not
              limited to:
              <ol className="font-semibold">
                <li>1. Posting Accurate and Authentic Information</li>
                <li>2. Respecting Other Users</li>
                <li>3. Original Content</li>
                <li>4. Engagement</li>
              </ol>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Content Ownership and Licensing
            </h2>
            <p className="text-gray-700">
              When you submit content such as posts, comments, or other
              materials to HelpHive, you retain ownership of your contributions.
              However, by submitting content, you grant us a non-exclusive,
              worldwide, royalty-free license to use, display, distribute, and
              modify your content to operate and promote the platform
              effectively. We reserve the right to remove or modify any content
              that violates our terms, infringes on intellectual property
              rights, or is deemed inappropriate.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content, design elements, logos, and branding on HelpHive are
              the exclusive intellectual property of the site owner unless
              otherwise stated. This includes the website’s layout, graphics,
              and functionality. Users are prohibited from copying, reproducing,
              distributing, or using any of these materials for commercial
              purposes without explicit written permission. Unauthorized use of
              our intellectual property may result in legal action. Similarly,
              users are expected to respect the intellectual property of others
              when contributing to the platform.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Prohibited Activities
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Spamming or posting irrelevant content.</li>
              <li>Misrepresentation of volunteer opportunities.</li>
              <li>
                Hacking or attempting unauthorized access to the platform.
              </li>
              <li>
                Using bots or automated tools to scrape data or interact with
                the website.
              </li>
              <li>Posting or sharing malicious or harmful content.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-700">
              HelpHive is provided “as is,” without warranties of any kind. We
              do not guarantee the accuracy or reliability of user-submitted
              content, including volunteer posts. Posts represent the opinions
              or descriptions of the users and do not constitute endorsements or
              guarantees by HelpHive.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              While we strive to ensure the smooth operation of HelpHive, we
              cannot guarantee uninterrupted service, error-free functionality,
              or the accuracy of user-submitted content. By using our website,
              you agree that HelpHive is not liabl.Your use of the website is at
              your own risk, and we disclaim all liability to the fullest extent
              permitted by law.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Modification of Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify these terms at any time.
              Any changes will be effective immediately upon posting. Continued
              use of the website after changes have been made constitutes
              acceptance of the updated terms. We encourage users to review
              these terms regularly.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl  mb-2 text-accent font-bold">
              Governing Law
            </h2>
            <p className="text-gray-700">
              These terms are governed by the laws of Bangladesh. Any disputes
              will be resolved under the jurisdiction of the relevant courts in
              Bangladesh.
            </p>
          </section>

          <section className="text-center mt-6">
            <p className="text-gray-700">
              If you have any questions about these terms, feel free to contact
              us at
              <span className="text-accent"> support@helphive.com.</span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
