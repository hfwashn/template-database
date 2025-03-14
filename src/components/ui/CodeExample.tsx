import Code from "@/components/Code";
import {
  RiEyeLine,
  RiFocus3Line,
  RiLineChartLine,
  RiNotification4Line
} from "@remixicon/react";
import Image from "next/image";
import { Badge } from "../Badge";
import CodeExampleTabs from "./CodeExampleTabs";
import gui from "./gui.png";
//import { siteConfig } from "@/app/siteConfig";

// /Users/bagga/BLYND/frontend/template-database/src/app/gui.png

const code = (
  <div className="w-full h-[31rem] relative">
    <Image
       src={gui}
      alt="GUI Example"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
);
/**
const code = `CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    gender CHAR(1),
    rewards_member BOOLEAN
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    sales_date DATE,
    customer_id INT REFERENCES Customers(customer_id)
);

CREATE TABLE Items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2)
);

CREATE TABLE Order_Items (
    order_id INT REFERENCES Orders(order_id),
    item_id INT REFERENCES Items(item_id),
);`
 */

const code2 = `query GetDetailedCreditInquiryData {
  Customers {
    customer_id
    name
    gender
    rewards_member
    total_inquiries: credit_inquiries_aggregate {
      aggregate {
        count
      }
    }
    average_score: credit_inquiries_aggregate {
      aggregate {
        avg {
          score
        }
      }
    }
    credit_inquiries(limit: 5, order_by: { inquiry_date: desc }) {
      inquiry_id
      inquiry_date
      status
      score
      agency
      post_status
      loan_amount
      interest_rate
      loan_term
      outcome {
        approval_reason
        decline_reason
      }
    }
  }
}
`

const features = [
  {
    name: "Pre-disclosed reporting",
    description:
      "Early visibility into new credit accounts eliminating the pre-reporting gaps.",
    icon: RiEyeLine,
  },
  {
    name: "Inquiry outcome tracking",
    description:
      "Identifies successful and failed conversions from credit inquiries, enabling precise tracking.",
    icon: RiLineChartLine,
  },
  {
    name: "Identify of unreportable debts",
    description:
      "Accounts legally restricted or prohibited from appearing on credit bureau reports.",
    icon: RiFocus3Line,
  },
  {
    name: "Real-time activity & alerts ",
    description:
      "Monitor a target account and subscribe to important activity changes.",
    icon: RiNotification4Line,
  },
]

export default function CodeExample() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl px-3"
    >
      <Badge>User-first</Badge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        Built by engineers, <br /> for everyone
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Rich and expressive query language that allows you to filter and sort by
        any field, no matter how nested it may be.
      </p>

      <CodeExampleTabs
  tab1={code} // Directly pass the JSX element for the image
  tab2={
    <Code
      code={code2}
      lang="javascript"
      copy={false}
      className="h-[31rem]"
    />
  }
/>
      {/** 
      <CodeExampleTabs
        tab1={
          <Code code={code} lang="sql" copy={false} className="h-[31rem]" />
        }
        tab2={
          <Code
            code={code2}
            lang="javascript"
            copy={false}
            className="h-[31rem]"
          />
        }
      />
      */}
      <dl className="mt-24 grid grid-cols-4 gap-10">
        {features.map((item) => (
          <div
            key={item.name}
            className="col-span-full sm:col-span-2 lg:col-span-1"
          >
            <div className="w-fit rounded-lg p-2 shadow-md shadow-indigo-400/30 ring-1 ring-black/5 dark:shadow-indigo-600/30 dark:ring-white/5">
              <item.icon
                aria-hidden="true"
                className="size-6 text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
              {item.name}
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
