"use client";
import { Timeline, Avatar } from "@material-tailwind/react";
import { TimelineItem } from "../components/timeline-item";
export function EmploymentHistory() {
  return (
    <>
      <h1 className="flex flex-nowrap gap-2 mb-5 text-xl md:text-4xl justify-center">
        Employment
        <strong className="text-fuchsia-400 text-center">History</strong>
      </h1>

      <Timeline>
        <TimelineItem
          icon={
            <Avatar
              size="sm"
              src="https://media.licdn.com/dms/image/C4E0BAQGcm4RM04WMKw/company-logo_200_200/0/1662464631099/flexperto_gmbh_logo?e=1717027200&v=beta&t=S1EcAtyqedSgIZBxJKLOzKcIVSDyzP0A4P3N-JsOoNA"
            />
          }
          header={
            <div className="flex justify-between bg-nav-background border-solid border-fuchsia-950 border w-full p-2 rounded-md">
              <h6 className="text-lg font-bold text-white">
                Software engineer At Flexperto Gmbh
              </h6>
              <span className="text-sm my-auto">Germany, Berlin</span>
            </div>
          }
          body={
            <div className="flex flex-col gap-2 ">
              <p className="text-lg text-center text-fuchsia-400 font-bold">
                Apr 2021 - Aug 2023
              </p>

              <div className="p-2 leading-5 text-md bg-nav-background border-solid border-fuchsia-950 border flex flex-wrap flex-col gap-4">
                <p>
                  Flexperto is a German startup powered by RGI, that provides 4
                  main products:
                </p>
                <ul className="list-decimal ml-5 flex flex-col gap-2">
                  <li>Scheduling & Calendar</li>
                  <li>Online Meeting</li>
                  <li>E-signature</li>
                  <li>Recording & Archiving</li>
                </ul>
                <p>
                  During my career with Flexperto, I learned many things and
                  achieved many tasks such as
                </p>
                <ul className="list-disc ml-5 flex flex-col gap-2">
                  <li>
                    Build and maintain an archiving micro-service (with
                    Moleculer-js) that collect all related files for a meeting
                    from other services (via API), create a zip file, and upload
                    it to S3
                  </li>
                  <li>
                    Extend the main broker package with Prometheus service to
                    collect default NodeJs metrics and build some Grafana
                    dashboards
                  </li>
                  <li>
                    Use and create Mongo queries (aggregation) via Redash for BI
                    dashboards and monitoring alerts
                  </li>
                  <li>
                    Create Alerts on a slack channel based on service logs from
                    Kibana
                  </li>
                  <li>
                    Create and maintain a micro-service to manage recurly
                    subscriptions and sync the internal database
                  </li>
                  <li>
                    Work with docker and deployment using Jenkins pipelines and
                    ansible playbooks
                  </li>
                </ul>
                <p>
                  In addition to that, some project management tasks such as
                  creating epics and tasks. also team management tasks like
                  on-boarding people to projects.
                </p>
                <p>
                  Daily bases in Flexperto I check the reported bugs/errors by
                  customers and investigated the cause then I provide a fix or
                  an explanation if that was expected.
                </p>
              </div>
            </div>
          }
        />
        <TimelineItem
          icon={
            <Avatar
              size="sm"
              src="https://media.licdn.com/dms/image/C4D0BAQEDYfi0tIaXTg/company-logo_200_200/0/1630560022932/rydeimages_logo?e=1717027200&v=beta&t=sXyw-WLl2M74nOAVBaxWyQFvHpx--TxPOPmiPpttk0M"
            />
          }
          header={
            <div className="flex justify-between bg-nav-background border-solid border-fuchsia-950 border w-full p-2 rounded-md">
              <h6 className="text-lg font-bold text-white">
                Full-Stack Developer At Ryde Gmbh ( KODAKOne )
              </h6>
              <span className="text-sm my-auto">Germany, Berlin</span>
            </div>
          }
          body={
            <div className="flex flex-col gap-2 ">
              <p className="text-lg text-center text-fuchsia-400 font-bold">
                Dec 2018 — Mar 2021
              </p>

              <div className="p-2 leading-5 text-md bg-nav-background border-solid border-fuchsia-950 border flex flex-wrap flex-col gap-4">
                <p>
                  With Ryde, I participate in the KODAKOne project which
                  basically a platform for image licensing. Therefore I achieved
                  different tasks such as:
                </p>
                <ul className="list-disc ml-5 flex flex-col gap-2">
                  <li>
                    Develop micro-services/APIs using NodeJs and SpringBoot,
                  </li>
                  <li>Connect services/applications with Keycloak (OAuth)</li>
                  <li>
                    Design front-end applications based on React following the
                    best practices such as route-based code-splitting, CSS
                    modules, functional components, and React hooks.
                  </li>
                  <li>
                    Create a react components library shared between web
                    applications using RollupJs
                  </li>
                  <li>
                    Design and implement the online payment flow via Stripe /
                    PayPal
                  </li>
                  <li>Work with Kafka events and Avro-Schema</li>
                  <li>Monitor Docker images and CI/CD runners with Gitlab</li>
                  <li>
                    Participate in the system documentation on KODAKOne
                    Confluence
                  </li>
                  <li>
                    Design an ElasticSearch-MongoDB connector using NodeJs
                  </li>
                </ul>
              </div>
            </div>
          }
        />

        <TimelineItem
          icon={
            <Avatar
              size="sm"
              src="https://www.keejob.com/media/recruiter/recruiter_8597/logo-8597-20181023-091652.jpg"
            />
          }
          header={
            <div className="flex justify-between bg-nav-background border-solid border-fuchsia-950 border w-full p-2 rounded-md">
              <h6 className="text-lg font-bold text-white">
                Software Developer At FlyCom
              </h6>
              <span className="text-sm my-auto">Tunisia</span>
            </div>
          }
          body={
            <div className="flex flex-col gap-2 ">
              <p className="text-lg text-center text-fuchsia-400 font-bold">
                Jun 2017 — Oct 2018
              </p>

              <div className="p-2 leading-5 text-md bg-nav-background border-solid border-fuchsia-950 border flex flex-wrap flex-col gap-4">
                <p>
                  With Flycom, which is a Tunisian startup, I was one of the
                  main engineers of the platform BibDoctor where a sick person
                  can schedule an appointment with a desired doctor.
                </p>
                <p>
                  In this project, I achieved many tasks I&apos;ll list some of
                  them:
                </p>
                <ul className="list-disc ml-5 flex flex-col gap-2">
                  <li>
                    Design and build a desktop application using Electron and
                    Angular
                  </li>
                  <li>Build API endpoints and web interfaces with Symfony4</li>
                  <li>Build a real-time chat using SailJs and Socket.Io</li>
                  <li>Design mobile interfaces using Ionic2</li>
                  <li>
                    Scrape public websites and APIs to get info related to
                    doctors, pharmacies, and medicament
                  </li>
                </ul>
                <p>
                  In addition to that working in an early-age startup with a
                  small size team was a great opportunity for me to take
                  responsibility for many features of the product.
                </p>
              </div>
            </div>
          }
        />
        <TimelineItem
          icon={
            <Avatar
              size="sm"
              src="https://media.licdn.com/dms/image/C560BAQHM4z24EYdCnQ/company-logo_200_200/0/1631336155804?e=1717027200&v=beta&t=XO3BpA0a6J7zhh_rohw6nfCV9MlaBX3U1LUO7Rns-KU"
            />
          }
          header={
            <div className="flex justify-between bg-nav-background border-solid border-fuchsia-950 border w-full p-2 rounded-md">
              <h6 className="text-lg font-bold text-white">
                Developer (half time) At ISP
              </h6>
              <span className="text-sm my-auto">Tunisia</span>
            </div>
          }
          body={
            <div className="flex flex-col gap-2 ">
              <p className="text-lg text-center text-fuchsia-400 font-bold">
                Jan 2017 — Jun 2017
              </p>

              <div className="p-2 leading-5 text-md bg-nav-background border-solid border-fuchsia-950 border flex flex-wrap flex-col gap-4">
                <p>
                  In ISP startup, I had the chance to see how we migrate or
                  rewrite a CRM.
                </p>
                <p>
                  Because of some limitations and a lack of documentation in
                  CodeIgniter, the team decided to rewrite a 4-year-old CRM of a
                  client using Symfony4.
                </p>
                <p>
                  Within this project, I also wrote SQL scripts for data
                  migration and transfer.
                </p>

                <p>
                  For a different customer, I was the main developer of his web
                  application using Angular4. In this project, I learned how I
                  communicate with a customer, deliver features, and put
                  deadlines
                </p>
              </div>
            </div>
          }
        />
      </Timeline>
    </>
  );
}
