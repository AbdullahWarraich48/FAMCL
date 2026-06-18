export function splitSectionHeading(heading: string): {
  headingBefore: string;
  headingHighlight: string;
} {
  const normalized = heading.replace(/\n/g, " ").trim();
  if (!normalized) {
    return { headingBefore: "", headingHighlight: "" };
  }

  const words = normalized.split(/\s+/);
  if (words.length <= 1) {
    return { headingBefore: "", headingHighlight: normalized };
  }

  const highlightWordCount =
    words.length >= 6 ? 3 : words.length >= 4 ? 2 : 1;
  const headingHighlight = words.slice(-highlightWordCount).join(" ");
  const headingBefore = words.slice(0, -highlightWordCount).join(" ");

  return {
    headingBefore: headingBefore ? `${headingBefore} ` : "",
    headingHighlight,
  };
}
