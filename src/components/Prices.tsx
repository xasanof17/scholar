import { useState } from "react";
import { Tab } from "@headlessui/react";
import TabBlock from "./TabBlock";
import { Button } from "../widgets";

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
            <div className="border-2 border-dashed border-yellow p-5">
              <Tab.List className="flex items-center space-x-14">
                {["standard group", "mini group", "individual"].map(
                  (tab, index) => (
                    <Tab
                      key={index}
                      className={({ selected }) =>
                        `tab ${selected ? "active" : "noactive"}`
                      }
                    >
                      {tab}
                    </Tab>
                  )
                )}
              </Tab.List>
              <Tab.Panels className="tabPanels">
                <Tab.Panel className="tabPanel">
                  <TabBlock
                    info={["first", "second", "third"]}
                    img="https://static3.tgstat.ru/channels/_0/8e/8e7c181aaf088a684f39b0e43fe4efea.jpg"
                  />
                </Tab.Panel>
                <Tab.Panel className="tabPanel">
                  <TabBlock
                    info={["first", "second", "third", "fourth"]}
                    img="https://static3.tgstat.ru/channels/_0/8e/8e7c181aaf088a684f39b0e43fe4efea.jpg"
                  />
                </Tab.Panel>
                <Tab.Panel className="tabPanel">
                  <TabBlock
                    info={["first", "second", "third", "fourth", "five"]}
                    img="https://static3.tgstat.ru/channels/_0/8e/8e7c181aaf088a684f39b0e43fe4efea.jpg"
                  />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Prices;
