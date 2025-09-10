"use client";

import React, { useState, useEffect } from "react";
import BookAuditButton from "@/components/BookAuditButton";
import Timeline from "@/components/Home/Timeline";

import { aiComparisonData, headerData } from "@/data/comparisonData";
import { solutionsData } from "@/data/solutionsData";

export default function SolutionClient({ solutionId }) {
  const solution = solutionsData.find((s) => s.id === solutionId);

  const [selectedOption, setSelectedOption] = useState("AI SDR");

  useEffect(() => {
    setSelectedOption(solution.title);
  }, [solution.title]);

  const selectedData = aiComparisonData[selectedOption];
  const selectedHeader = headerData[selectedOption];

  return (
    <main className="min-h-screen relative pt-6 z-10 text-seasalt">
      <section className="pb-20 mb-6">
        <div className="flex justify-center mb-6">
          <div className="green-glass-badge backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
            <span className="text-[#00FF93] font-medium">{solution.title}</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1
            className="!text-5xl md:!text-[4rem] text-seasalt font-bold !mb-6"
            dangerouslySetInnerHTML={{ __html: solution.heading }}
          />
          <p className="text-xl text-[#F8F9FB]/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {solution.desc}
          </p>
          <div className="flex w-full justify-center">
            <BookAuditButton className="!text-lg !py-2.5" />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" font-bold gradient-title !mb-4">Core Features</h2>
            <p className="text-xl text-[#F8F9FB]/70 max-w-3xl mx-auto">
              {solution.overviewDesc}
            </p>
          </div>

          <div className={`grid md:grid-cols-2 ${solution.featuresGrid} gap-8`}>
            {solution.coreFeatures.map((feature, index) => (
              <div
                key={index}
                className={` flex ${
                  solutionId === "ai-business-partner"
                    ? "items-center"
                    : "items-start"
                }  transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small flex flex-col  rounded-2xl p-4 md:p-5 shadow-2xl relative `}
              >
                <div className="border-glow"></div>
                <div
                  className={`flex gap-4 ${
                    solutionId === "ai-business-partner"
                      ? "items-center"
                      : "items-start"
                  } `}
                >
                  <div className="w-10 h-10 p-1 shrink-0 flex items-center justify-center  rounded-lg">
                    <feature.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                  </div>
                  <h3
                    className="text-xl  "
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  ></h3>
                </div>
                {solution.id === "ai-project-manager" && (
                  <div className="mt-4">
                    <p
                      className="text-lg text-[#F8F9FB]/70"
                      dangerouslySetInnerHTML={{ __html: feature.desc }}
                    ></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 z-10 relative text-seasalt">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="gradient-title font-bold text-center">Benefits</h2>

          <div className="content-box  border-glow-wrapper highlighted-box-small   backdrop-blur-lg  rounded-3xl p-2 md:p-8 shadow-2xl relative ">
            <div className="border-glow"></div>
            <h3 className="text-xl p-4 pb-0 md:p-0 font-semibold mb-4 text-white">
              {selectedOption} Comparison
            </h3>
            <div className="overflow-x-auto">
              {selectedData ? (
                <div className="relative overflow-x-auto">
                  {/* Border box for last two columns */}
                  <div
                    className={`absolute top-0 bottom-0 right-0 ${
                      selectedOption === "AI SDR" ||
                      selectedOption === "AI Business Partner"
                        ? "w-[46%] md:w-[45%]"
                        : selectedOption === "AI Marketing Suite"
                        ? "w-[54%] lg:w-[57%]"
                        : selectedOption === "Your 24/7 AI Secretary"
                        ? "w-[50%] md:w-[54%] lg:w-[58%]"
                        : "w-[49%] md:w-[50%]"
                    }  border border-[#00FF93]/30 rounded-xl pointer-events-none z-0`}
                  />

                  <table className="w-full text-center text-xs md:text-base text-white relative z-10">
                    <thead className="text-[#00FF93] border-b border-[#00FF93]/30">
                      {selectedHeader.map(([human, ai], i) => (
                        <tr key={i}>
                          <th className="py-4 text-left px-2 md:px-4">
                            Feature
                          </th>
                          <th className="py-4 px-2 md:px-4">{human}</th>
                          <th className="py-4 px-2 md:px-4">{ai}</th>
                          <th className="py-4 px-2 md:px-4">Improvement</th>
                        </tr>
                      ))}
                    </thead>
                    <tbody className="divide-y divide-[#2a2a2a]">
                      {selectedData.map(
                        ([metric, human, ai, improvement], i) => (
                          <tr key={i} className="hover:bg-[#00FF93]/5">
                            <td className="py-4 px-2 md:px-4 text-left font-semibold text-white">
                              {metric}
                            </td>
                            <td className="py-4 px-2 md:px-4">{human}</td>
                            <td className="py-4 font-semibold px-2 md:px-4">
                              {ai}
                            </td>
                            <td className="py-4 px-2 md:px-4">{improvement}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-gray-400 text-center py-16">
                  Comparison data for{" "}
                  <span className="text-white font-semibold">
                    {selectedOption}
                  </span>{" "}
                  is not yet available.
                  <br />
                  Please check back soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {solution.useCases || solution.whoFor ? (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="gradient-title font-bold text-center">
              {solution.useCases ? "Industries" : "Who It's For"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solution.useCases &&
                solution.useCases.map((use, index) => (
                  <div
                    key={index}
                    className="   transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
                  >
                    <div className="border-glow"></div>
                    <div className="flex gap-4 items-center ">
                      <div className="w-12 shrink-0 h-12 p-1  flex items-center justify-center  rounded-lg">
                        <use.icon className="w-6 shrink-0 h-6 text-[#00FF93]" />
                      </div>
                      <h3 className="text-xl font-semibold ">{use.title}</h3>
                    </div>
                    {/* <p className="text-[#F8F9FB]/80">{use.desc}</p> */}
                  </div>
                ))}
              {solution.whoItsFor &&
                solution.whoItsFor.map((item, index) => (
                  <div
                    key={index}
                    className=" flex items-center transition-all duration-300 hover:shadow-lg cursor-pointer content-box border-glow-wrapper highlighted-box-small   rounded-2xl p-4 md:p-5 shadow-2xl relative "
                  >
                    <div className="border-glow"></div>
                    <div className="flex gap-4 items-center ">
                      <div className="w-12 h-12 p-1 shrink-0 flex items-center justify-center  rounded-lg">
                        <item.icon className="w-6 h-6 shrink-0 text-[#00FF93]" />
                      </div>
                      <h3 className="text-xl  ">{item.title}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ) : null}

      <Timeline />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="gradient-title font-bold text-4xl mb-6">
            Ready to Upgrade Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-[#F8FBF]/80">
            Join hundreds of businesses already using AI to accelerate growth.
          </p>
          <div className="flex w-full justify-center">
            <BookAuditButton className="!text-lg !py-2.5" />
          </div>
        </div>
      </section>
    </main>
  );
}
