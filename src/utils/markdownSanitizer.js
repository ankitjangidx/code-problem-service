import  {marked}  from "marked";
import sanitizeHtmlLibrary from "sanitize-html";
import TurndownService from "turndown";

export function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  // 1. Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);

  // 2. Sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  // 3. Convert the sanitized html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}


