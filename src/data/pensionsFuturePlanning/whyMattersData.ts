import type {
  BookkeepingWhyMattersIconKey,
  WhyMattersData,
} from "@/data/bookkeeping/whyMattersData";

type PensionsWhyMattersIconKey = BookkeepingWhyMattersIconKey;

export const PENSIONS_FUTURE_PLANNING_WHY_MATTERS_DATA: WhyMattersData = {
  sectionLabel: "Why It Matters",
  heading: "The Importance of Pension & Future Planning",
  description:
    "Many people underestimate how much they’ll need for retirement. With the right planning today, you can secure a better financial future. Small decisions made now can compound over time, significantly improving your retirement income.",
  items: [
    {
      title: "Avoid Under-Saving for Retirement",
      description:
        "Many individuals fail to save enough for retirement. Early planning ensures you don’t fall short later in life.",
      iconKey: "alert-triangle" as PensionsWhyMattersIconKey,
    },
    {
      title: "Maximise Tax Efficiency",
      description:
        "The right pension strategy reduces your tax burden, ensuring more of your savings go toward your future.",
      iconKey: "circle-dollar" as PensionsWhyMattersIconKey,
    },
    {
      title: "Secure Long-Term Financial Stability",
      description:
        "Proper pension planning ensures a steady income in retirement, avoiding financial instability in later years.",
      iconKey: "anchor" as PensionsWhyMattersIconKey,
    },
    {
      title: "Avoid Reduced Retirement Income",
      description:
        "Poor planning can result in a significant drop in income once you stop working. We ensure you avoid this risk.",
      iconKey: "chart-line" as PensionsWhyMattersIconKey,
    },
    {
      title: "Benefit from Early Planning",
      description:
        "Starting early gives your pension more time to grow, maximising the benefits of compound interest.",
      iconKey: "clock" as PensionsWhyMattersIconKey,
    },
    {
      title: "Peace of Mind for the Future",
      description:
        "A well-organised pension plan gives you clarity and confidence in your financial future.",
      iconKey: "leaf" as PensionsWhyMattersIconKey,
    },
  ],
};

