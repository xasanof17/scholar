import { useState } from "react";
import { Tab } from "@headlessui/react";

const tabs = ["standard group", "mini group", "individual"];

const Prices = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium">
            Our{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow">
              <b className="relative">Prices</b>
            </span>
          </h2>
        </div>
        <div className="tabs">
          <Tab.Group>
            <Tab.List className="flex items-center space-x-3">
              {tabs.map((tab) => (
                <Tab
                  className={({ selected }) =>
                    `tab ${selected ? "active" : "noactive"}`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel"></Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Prices;
