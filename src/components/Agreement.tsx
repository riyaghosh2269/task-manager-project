import { useForm } from "@tanstack/react-form";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const makeIcon = (path: string): ComponentType<IconProps> => {
  const Icon = (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={path} />
    </svg>
  );

  return Icon;
};


const CalendarDays = makeIcon(
  "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Zm2 10h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01",
);

const FileText = makeIcon(
  "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8m-8 4h8",
);

const MapPin = makeIcon(
  "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
);

const Printer = makeIcon(
  "M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6zM18 12h.01",
);


const clauseClass =
  "space-y-3 text-[15px] leading-7 text-foreground/80 print:text-[11px] print:leading-[1.65]";

const headingClass =
  "font-serif text-lg font-bold text-foreground print:text-[13px]";

const printCardClass =
  "rounded-2xl border border-foreground/10 bg-white p-6 sm:p-8 print:break-inside-avoid print:rounded-none print:border-0 print:bg-transparent print:p-0";

const inputClass =
  "min-w-0 border-0 border-b border-dashed border-foreground/30 bg-transparent px-2 py-1 font-semibold outline-none transition focus:border-primary-600 print:px-1 print:text-[11px]";

export default function Agreement() {
  const form = useForm({
    defaultValues: {
      agreementDate: "",
      agreementTime: "",
      referrerName: "",
      address: "",
      pinCode: "",
      companyName: "",
      agreementName: "",
      agreementAddress: "",
      agreementPin: "",
      finalDate: "",
      finalPlace: "",
    },

    onSubmit: async () => {
      window.print();
    },
  });

  function cn(
    ...classes: Array<string | undefined | false | null>
  ): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="min-h-screen bg-background px-4 py-8 font-serif text-foreground print:bg-white print:p-0">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="mx-auto max-w-5xl"
      >
        {/* ACTION BAR */}
        <div className="sticky top-4 z-50 mb-5 flex items-center justify-between rounded-2xl border border-foreground/10 bg-background/90 p-3 shadow-lg backdrop-blur print:hidden">
          <div>
            <p className="font-sans text-sm font-semibold">
              Partnership Agreement Review
            </p>

            <p className="font-sans text-xs text-foreground/50">
              Review the agreement before printing
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2.5 font-sans text-sm font-semibold text-black transition hover:bg-primary-700",
            )}
          >
            <Printer className="size-4" />
            Print Agreement
          </button>
        </div>

        {/* DOCUMENT */}
        <article
          className={cn(
            "overflow-hidden rounded-4xl border border-foreground/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)] print:rounded-none print:border-0 print:shadow-none",
          )}
        >
          {/* HEADER */}
          <header className="border-b border-foreground/10 px-6 py-10 text-center sm:px-10 print:px-0 print:pb-5 print:pt-0">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-700 print:hidden">
              <FileText className="size-7" />
            </div>

            <p className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/45 print:hidden">
              Official Document
            </p>

            <h1 className="text-3xl font-bold tracking-wide sm:text-4xl print:text-[20px]">
              PARTNERSHIP AGREEMENT
            </h1>
          </header>

          <div className="space-y-7 p-5 sm:p-10 print:space-y-5 print:p-0">
            {/* PAGE 1 */}
            <section className={printCardClass}>
              <div className={clauseClass}>
                <p>
                  THIS ASSOCIATE&apos;S CHANNEL AGREEMENT is made{" "}
                  <form.Field name="agreementDate">
                    {(field) => (
                      <input
                        type="text"
                        placeholder="Date"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        className={cn(inputClass, "w-32")}
                      />
                    )}
                  </form.Field>{" "}
                  <form.Field name="agreementTime">
                    {(field) => (
                      <input
                        type="text"
                        placeholder="Time"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        className={cn(inputClass, "w-32")}
                      />
                    )}
                  </form.Field>
                  .
                </p>

                <p>
                  (
                  <form.Field name="referrerName">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(
                            e.target.value.toUpperCase(),
                          )
                        }
                        placeholder="REFERRER NAME"
                        className={cn(
                          inputClass,
                          "w-52 uppercase",
                        )}
                      />
                    )}
                  </form.Field>
                  ), residing at(
                  <form.Field name="address">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(
                            e.target.value.toUpperCase(),
                          )
                        }
                        placeholder="ADDRESS"
                        className={cn(
                          inputClass,
                          "w-105 max-w-full uppercase",
                        )}
                      />
                    )}
                  </form.Field>
                  )- (
                  <form.Field name="pinCode">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        placeholder="PIN"
                        className={cn(inputClass, "w-24")}
                      />
                    )}
                  </form.Field>
                  ) , hereinafter referred to as the “Referrer”, which
                  expression, unless repugnant to the context or meaning
                  thereof, shall be deemed to mean and include his/her/its
                  heirs, legal representatives, executors, administrators,
                  successors and permitted assigns (as the case may be) of
                  the One Part.
                </p>

                <div className="py-3 text-center font-bold">
                  Between
                </div>

                <p>
                  M/S SRLOANSERVICE LOANS (SRLOANSERVICE), company
                  registered office at (hereinafter referred to as
                  “SRLOANSERVICE LOANS),” which expression, unless it be
                  repugnant to the context or meaning thereof shall deem to
                  include its successors and assigns of the Other Part.
                </p>

                <p>
                  Referrer and SRLOANSERVICE, collectively referred to as
                  the “Parties” and singularly as a “Party”.
                </p>

                <div>
                  <h2 className={headingClass}>1. Background</h2>

                  <p>
                    The Referrer is engaged, inter alia, in the business of
                    sourcing prospective borrowers to the various lenders
                    through their online platform.
                  </p>

                  <p>
                    SRLOANSERVICE has necessary arrangement/tie up with
                    various Banks/Financial Institutions/NBFCs for arranging
                    loan/financial assistance/credit facility, to various
                    Person (as defined hereinbelow), as per his/her/its
                    requirement. Accordingly, SRLOANSERVICE has approached
                    the Referrer to refer its clients/persons
                    (“Prospects&apos;&apos;) to SRLOANSERVICE, who may be
                    looking for a loan/financial assistance/credit facility
                    from a bank/financial institution/NBFCs (“Purpose”).
                    Based on the discussions had between the Parties, the
                    Referrer has agreed to refer the Prospects to
                    SRLOANSERVICE for the above-said Purpose for a Fee
                    (“Referral Fee&apos;&apos;).
                  </p>

                  <p>
                    “Person” shall mean any individual, company, firm,
                    association, trust or any other organization or entity.
                    Based on the discussions held between the Parties, the
                    Parties are now desirous of entering into this Agreement,
                    on the terms and conditions contained in this Agreement.
                  </p>
                </div>

                <div>
                  <h2 className={headingClass}>
                    2. Referral of Prospects
                  </h2>

                  <p>
                    . The Referrer shall refer the Prospects to
                    SRLOANSERVICE, in a manner and in such format, as
                    provided in Annexure A to this Agreement. The manner and
                    format in which the details of the Prospect shall be
                    referred shall be mutually agreed to between the Parties.
                  </p>
                </div>

                <div>
                  <h2 className={headingClass}>
                    3. Obligation of SRLOANSERVICE.
                  </h2>

                  <p>
                    (i) for all loan/financial assistance/credit facility,
                    documentation including complying with the Know Your
                    Customer (“KYC”) requirement of the Prospect, as per
                    Applicable Law (as defined hereinbelow) / statutory
                    requirement and the requirement of the respective
                    bank/financial institution/NBFC, will be complied with
                    and completed by SRLOANSERVICE and/or its employees,
                    agents etc., without any recourse or liability on the
                    part of Referrer;
                  </p>

                  <p>
                    (ii) SRLOANSERVICE shall comply with all Applicable Law
                    to carry out its business operations, including labor
                    laws as applicable to it;
                  </p>

                  <p>
                    (iii) SRLOANSERVICE agrees and understands that the
                    Referrer shall have no privity of contract with the
                    employees, agents, contractors, subcontractors of
                    SRLOANSERVICE and SRLOANSERVICE shall be solely liable to
                    palyl wages, other benefits to its employees, agents,
                    contracts, sub-contractors;
                  </p>

                  <p>
                    (v) for establishing true and fair payment of the
                    Referral Fee (as detailed below in clause 5) to Referrer,
                    on the disbursed loan/financial assistance/credit
                    facility, by the bank/financial institution/NBFC to the
                    referred Prospect, SRLOANSERVICE shall along with each
                    payment provide (a) the name(s) of the Prospects, whose
                    loan/financial assistance/credit facility has been
                    disbursed by the concerned
                    bank/financial institution/NBFCs; (b) location of the
                    Prospect, (c) amount of loan/financial assistance/credit
                    facility approved; (d) amount of loan/financial
                    assistance/credit facility disbursed/availed by the said
                    Prospect; (e) nature of loan/financial assistance/credit
                    facility availed by the Prospect; (f) name of the
                    bank/financial institution/NBFC approving the said
                    facility, (g) date of commission/fee/brokerage received
                    by SRLOANSERVICE from the said
                    bank/financial institution/NBFC, in case of each such
                    Prospect; and (i) gross & net amount of Referral Fee to be
                    paid to the Referrer
                  </p>

                  <p>
                    “Applicable Law” means any statute, notification, bye
                    law, rule and regulation, directive, guideline,
                    ordinance, order, or instruction having the force of law
                    enacted or issued by any Governmental Authority, whether
                    in effect as of the date of this Agreement or thereafter,
                    and shall include laws in any territorial jurisdiction as
                    may be applicable.
                  </p>
                </div>
              </div>
            </section>

            {/* PROJECT TEAM + LIABILITY */}
            <section className={printCardClass}>
              <div className={clauseClass}>
                <div>
                  <h2 className={headingClass}>
                    4. Establishment of Joint Project Team:
                  </h2>

                  <p>
                    The Parties shall jointly establish a Project Team that
                    shall be dedicated to the purpose of implementing this
                    Agreement. Each Party shall appoint one single point of
                    contact (“Project Team”). The Project Team so constituted
                    shall review the aims, objectives, and activities under
                    and in terms of this Agreement. The Parties shall mutually
                    decide the modalities of functioning of the Project Team.
                    Each Party shall inform the other Party of any change in
                    the contact point.
                  </p>
                </div>

                <div>
                  <h2 className={headingClass}>
                    5. Limitation of Liability.
                  </h2>

                  <p>
                    Under no circumstances shall either Party be liable to the
                    other for any special, indirect, incidental or
                    consequential damages of any kind or nature whatsoever,
                    arising out of or in any way related to this Agreement
                  </p>
                </div>
              </div>
            </section>

            {/* CONFIDENTIALITY */}
            <section className={printCardClass}>
              <div className={clauseClass}>
                <h2 className={headingClass}>6. Confidentiality.</h2>

                <p>
                  Apart from the Purpose as described hereinabove, both
                  Parties shall treat the information (as defined herein
                  below) given to the other Party as strictly confidential.
                </p>

                <p>
                  “Confidential Information” means any and all data or
                  information that is of value to either Party, and is not
                  generally known in the industry or to competitors, and
                  includes, but is not limited to, business information,
                  specifications, research, software, trade secrets,
                  discoveries, ideas, know-how, designs, drawings, flow
                  charts, data, computer programs, marketing plans,
                  customer/Prospects names, budget figures, and other
                  technical financial and business information concerning
                  the disclosing party, which is disclosed by the disclosing
                  party, whether directly in oral or material form to the
                  other party (the “receiving party”), or indirectly, by
                  permitting the receiving party to observe the conduct of
                  the disclosing party&apos;s various operations or
                  processes, but shall not include Non-Proprietary
                  Information.
                </p>

                <p>
                  “Non-Proprietary Information” means information that: (i)
                  is within the public domain at the date of disclosure or
                  which thereafter enters the public domain through no fault
                  of the receiving party; or (ii) is already known to the
                  receiving Party at the time of its disclosure by the
                  disclosing party, and is not subject to confidentiality
                  restrictions; or (iii) following its Disclosure to the
                  receiving party is received by the receiving party without
                  an obligation of confidence from a third party who the
                  receiving party had no reason to believe was not lawfully
                  in possession of such information, free of any obligation
                  of confidence; or (iv) is independently developed by the
                  receiving party or a parent, subsidiary or affiliate of the
                  receiving party party without reference to or knowledge of
                  the disclosing party&apos;s Confidential Information; or
                  (v) the disclosing party has given its prior written
                  approval to disclose;
                </p>
              </div>
            </section>

            {/* REQUIRED DISCLOSURE */}
            <section className={printCardClass}>
              <div className={clauseClass}>
                <div>
                  <h2 className={headingClass}>
                    7. Required Disclosure.
                  </h2>

                  <p>
                    The obligation of nondisclosure set forth above shall not
                    apply to any Confidential Information that the receiving
                    party is required to disclose by any Applicable Law, by
                    any rule or regulation of any court or government agency
                    of competent jurisdiction, or pursuant to legal process;
                    provided, however, that the receiving party required to
                    make such disclosure shall (a) promptly use its reasonable
                    best efforts to limit such disclosure, (b) use its
                    reasonable best efforts to provide the disclosing party
                    with advance notice of any such request for disclosure as
                    promptly as possible in order that the disclosing party
                    may seek a protective order or such other appropriate
                    remedy as the disclosing party deems necessary, and (c)
                    in any event, make such disclosure only to the extent so
                    required.
                  </p>
                </div>

                <div>
                  <h2 className={headingClass}>
                    8. Injunctive Relief.
                  </h2>

                  <p>
                    The receiving party acknowledges that the improper
                    disclosure or use of the Confidential Information may
                    give rise to irreparable injury to the disclosing party,
                    inadequately compensable in damages, and that,
                    Accordingly, the disclosing party may seek and obtain, in
                    addition to any legal remedies that may be available,
                    injunctive relief against the breach or threatened breach
                    by the receiving party of any of the terms of this
                    Agreement.
                  </p>
                </div>

                <div>
                  <h2 className={headingClass}>
                    9. Relationship of the Parties.
                  </h2>

                  <p>
                    Nothing in this Agreement nor any acts of the Parties
                    shall be construed, implied or deemed to create an agency,
                    partnership, joint venture or employer and employee
                    relationship between them. Neither this Agreement nor any
                    of its provisions shall be considered or construed as a
                    commitment by either Party to engage the other Party in
                    any work or to purchase any products or services from the
                    other Party.
                  </p>
                </div>

                <div>
                  <h2 className={headingClass}>10. Notices.</h2>

                  <p>
                    Notices and other communications required or permitted
                    pursuant to this Agreement shall be in writing and shall
                    be delivered personally, or by prepaid registered mail,
                    or by use of professional overnight courier service, to
                    the other Party, at the addresses set forth above.
                  </p>
                </div>

                <div>
                  <h2 className={headingClass}>
                    11. Entire Agreement.
                  </h2>

                  <p>
                    This Agreement contains the entire understanding between
                    the Parties regarding the subject matter hereof,
                    superseding all prior or contemporaneous communications,
                    agreements, or understandings. No An amendment to the
                    terms and conditions of this Agreement shall be valid and
                    binding on the Parties unless made in writing and signed
                    by an authorized representative of each of the Parties.
                  </p>
                </div>
              </div>
            </section>

            {/* ANTI BRIBERY */}
            <section className={printCardClass}>
              <div className={clauseClass}>
                <h2 className={headingClass}>
                  Anti-Bribery and Corruption
                </h2>

                <p>
                  (i) The Referrer must not violate any Applicable
                  Anti-Bribery Law
                </p>

                <p>
                  (ii) The Referrer has and must at all times implement
                  adequate procedures designed to prevent it or any associated
                  Person from engaging in any activity which would constitute
                  an offense under the Applicable Anti-Bribery Law
                </p>

                <p>
                  (iii) The Referrer represents that, in connection with this
                  Agreement, no improper financial or other advantage has
                  been will be or is agreed to be given to any person by or on
                  behalf of the Referrer or its Associated Persons
                </p>

                <p>
                  (iv) Breach of any of the provisions in this clause or of
                  any Applicable Anti-Bribery Law is a material breach of this
                  Agreement for termination and, without prejudice to any
                  other right, relief or remedy, entitles SRLOANSERVICE to
                  terminate this Agreement immediately.
                </p>

                <p>
                  For the foregoing provision, Applicable Anti-Bribery Law
                  means any bribery, fraud, kickback, or other similar
                  anti-corruption law or regulation.
                </p>

                <p>
                  For the foregoing provision, Associated Person means any
                  entity, a person who (by reference to all the relevant
                  circumstances) performs services for or on behalf of that
                  entity in any capacity, including, without limitation,
                  employees, agents, subsidiaries, representatives, and
                  subcontractors
                </p>

                <p>
                  (v) It shall not knowingly enter into any communication,
                  including but not limited to calls, sms or emails to any
                  person impersonation as an employee or associate of any
                  regulatory body or any other person, for any purpose,
                  including to source Prospects.
                </p>

                <p>
                  (b) The Parties agree to use all reasonable efforts to
                  resolve any disputes and differences of any kind whatsoever
                  arising out of this Agreement (“Disputes”) expediently and
                  amicably. If the Parties are unable to resolve the Disputes
                  expediently and amicably within a period of 30 (thirty)
                  days, the Parties shall give themselves a cooling-off period
                  of 15 (fifteen) days and reconvene for an amicable
                  resolution of the Disputes. In the event such Disputes are
                  not amicably resolved for a period of 60 (sixty) days from
                  the date such discussions first started, such Disputes shall
                  be finally, exclusively and conclusively settled by
                  reference to arbitration under the Arbitration and
                  Conciliation Act, 1996 (as may be amended from time to time)
                  and to be administered by the arbitral tribunal consisting
                  of a sole arbitrator to be mutually appointed by the
                  Parties. In the event the Parties are unable to agree upon
                  an arbitrator, the procedure outlined in the Arbitration and
                  Conciliation Act, 1996, for such appointment shall be
                  followed. The Parties agree to be bound by any arbitral
                  award or order resulting from any arbitration conducted
                  hereunder. The arbitration shall take place in Mumbai and in
                  the English language. The Parties shall jointly bear the
                  costs of the arbitration. The courts at Mumbai shall have
                  exclusive jurisdiction.
                </p>
              </div>
            </section>

            {/* OTHER */}
            <section className={printCardClass}>
              <div className={clauseClass}>
                <h2 className={headingClass}>Other:</h2>

                <p>
                  1. If the channel partner is found guilty of any kind of
                  wrong activity or in the office or police station, then it
                  will be terminated immediately.
                </p>

                <p>
                  2. If a person takes a customer&apos;s kyc and other
                  documents for the bank, through mail, courier, or WhatsApp,
                  and the bank or banking institution catches it while doing
                  so, SRLOANSERVICE will not be responsible for that. And he
                  will have to pay the penalty kept by the bank at the same
                  time. Especially for HDFC BANK, AXIS BANK, IDFC BANK, ICICI
                  BANK, INDUSIND BANK, CITIBANK, Bajaj, and YES BANK. On
                  doing so, it will be terminated immediately.
                </p>

                <p>
                  3. SRLOANSERVICE doesn&apos;t have all the lenders&apos;
                  code directly. SRLOANSERVICE uses some other Corporate Dsa
                  lenders Codes.
                </p>

                <p>
                  4. If a person is involved in any kind of wrong activity
                  for the bank or commits forgery with the customer&apos;s
                  signature or customer papers So SRLOANSERVICE will not be
                  responsible for that, and the channel partner will have to
                  pay the penalty kept by the bank at the same time
                </p>
              </div>
            </section>

            {/* AGREEMENT */}
            <section
              className={cn(
                printCardClass,
                "print:break-before-page",
              )}
            >
              <div className={clauseClass}>
                <h2 className="mb-5 text-center text-2xl font-bold print:text-[18px]">
                  Agreement
                </h2>

                <p>
                  ( ) (
                  <form.Field name="agreementName">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(
                            e.target.value.toUpperCase(),
                          )
                        }
                        placeholder="NAME"
                        className={cn(
                          inputClass,
                          "w-48 uppercase",
                        )}
                      />
                    )}
                  </form.Field>
                  ) , (
                  <form.Field name="agreementAddress">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(
                            e.target.value.toUpperCase(),
                          )
                        }
                        placeholder="ADDRESS"
                        className={cn(
                          inputClass,
                          "w-90 max-w-full uppercase",
                        )}
                      />
                    )}
                  </form.Field>
                  ) - (
                  <form.Field name="agreementPin">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        placeholder="PIN"
                        className={cn(inputClass, "w-24")}
                      />
                    )}
                  </form.Field>
                  ) hereby associate myself with SRLOANSERVICE. (hereinafter
                  referred to as &quot;SRLOANSERVICE&quot;) to source files
                  for loan disbursements. I assure that all documents
                  collected from customers will be verified against the
                  original documents. In case of any non-compliance, my
                  company and I will be solely responsible for any penalties
                  levied by the bank.
                </p>

                <p>
                  SRLOANSERVICE authorized you & your team to do business in
                  our code on a pan-India level.
                </p>

                <p>
                  1. Payouts will be transferred to the associate account
                  only after KYC and bank details are submitted.
                </p>

                <p>
                  2. Payouts for lead sharing without documents will be
                  reduced according to the payout structure.
                </p>

                <p>
                  3. Any penalties levied by the bank for fraud reported on
                  files sourced by the advisor will be borne by the advisor or
                  their team, whoever is found guilty.
                </p>

                <p>4. TDS of 5% will be applicable on all payouts.</p>

                <p>
                  5. 18% GST only applicable when Associate crosses ₹2 lakh
                  payout in a month.
                </p>

                <p>
                  6. Payouts for personal loans and business loans will be
                  made between the 15th and 25th of each month.
                </p>

                <p>
                  7. Payouts for home loans, loans against property, LRD
                  CC,and drop line OD will be made after SRLOANSERVICE
                  receives the payout from the bank or NBFC.
                </p>

                <p>
                  8. SRLOANSERVICE reserves the right to change its policies
                  without prior notice.
                </p>
              </div>
            </section>

            {/* DISCLAIMERS */}
            <section className={printCardClass}>
              <div className={clauseClass}>
                <h2 className={headingClass}>8. Disclaimers</h2>

                <p>
                  8.1 If a bank or NBFC rejects any referred
                  customer&apos;s loan application, SRLOANSERVICE shall not
                  be held liable in any way.
                </p>

                <p>
                  8.2 The Referrer acknowledges that SRLOANSERVICE does not
                  guarantee loan approval and cannot influence a
                  lender&apos;s internal decision process.
                </p>

                <p>
                  8.3 SRLOANSERVICE has no direct or indirect “setting” or
                  influence with any bank or NBFC for loan approvals. All
                  approvals are at the sole discretion of the concerned bank
                  or NBFC.
                </p>

                <p>
                  9. All private funding cases and taxation services will be
                  chargeable by SRLOANSERVICE.
                </p>

                <p>
                  10. Insurance policy payouts will be made on the same
                  schedule as personal loans and business loans.
                </p>

                <p>
                  12. Demat account payouts will be made only if the opened
                  account is activated.
                </p>

                <p>
                  13. Any dispute, controversy, or claim arising out of or
                  relating to this Agreement, including its interpretation,
                  validity, or termination, shall be subject to the exclusive
                  jurisdiction of the competent courts in .
                </p>
              </div>

              {/* FINAL DETAILS */}
              <div className="mt-10 space-y-5 border-t border-foreground/10 pt-7 print:mt-6 print:pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <CalendarDays className="size-4 print:hidden" />

                  <strong>Date:</strong>

                  <form.Field name="finalDate">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        className={cn(inputClass, "w-48")}
                        placeholder="Date"
                      />
                    )}
                  </form.Field>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <MapPin className="size-4 print:hidden" />

                  <strong>Place:</strong>

                  <form.Field name="finalPlace">
                    {(field) => (
                      <input
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        className={cn(inputClass, "w-72")}
                        placeholder="Place"
                      />
                    )}
                  </form.Field>
                </div>

                <div className="grid gap-10 pt-10 sm:grid-cols-2 print:grid-cols-2 print:pt-8">
                  <div>
                    <div className="h-16 border-b border-foreground/30 print:h-12" />

                    <p className="mt-2 font-bold">
                      SRLOANSERVICE
                    </p>
                  </div>

                  <div>
                    <div className="h-16 border-b border-foreground/30 print:h-12" />

                    <form.Subscribe
                      selector={(state) =>
                        state.values.agreementName
                      }
                    >
                      {(name) => (
                        <p className="mt-2 font-bold">
                          {name || "ASSOCIATE / REFERRER"}
                        </p>
                      )}
                    </form.Subscribe>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="border-t border-foreground/10 bg-foreground/[0.025] px-6 py-5 text-center font-sans text-[10px] uppercase tracking-[0.18em] text-foreground/40 print:bg-white print:py-3">
            Partnership Agreement • SRLOANSERVICE
          </footer>
        </article>
      </form>
    </section>
  );
}