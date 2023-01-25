import { useState } from "react";
import { Tab } from "@headlessui/react";
import TabBlock from "./TabBlock";
import { YellowTitle } from "../widgets";
import { Button } from "../widgets";

const Prices = () => {
  const infoList = [
    "Группа 13 (±1) Учеников",
    "2 книги ( Students book and Home book)",
    "Фирменная Тетрадь Grammar и Vocabulary",
    "Сервис Academic Support",
    "Видео Арсенал для каждого урока",
    "Speaking Club и Master-class",
    "Speaking Club и Master-class",
    "Ielts Speaking",
  ];
  return (
    <section className="mt-[100px]">
      <div className="container">
        <YellowTitle title="Prices" />
        <div className="tabs">
          <Tab.Group>
            <div className="border-2 border-dashed border-yellow p-5">
              <Tab.List className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-14">
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
                    info={infoList}
                    price="450 000"
                    img="https://static3.tgstat.ru/channels/_0/8e/8e7c181aaf088a684f39b0e43fe4efea.jpg"
                  />
                </Tab.Panel>
                <Tab.Panel className="tabPanel">
                  <TabBlock
                    info={infoList}
                    price="450 000"
                    img="https://static3.tgstat.ru/channels/_0/8e/8e7c181aaf088a684f39b0e43fe4efea.jpg"
                  />
                </Tab.Panel>
                <Tab.Panel className="tabPanel">
                  <TabBlock
                    info={infoList}
                    price="450 000"
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
