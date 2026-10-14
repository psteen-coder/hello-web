// Local html-validate plugin with project-specific rules.
const { Rule } = require("html-validate");

class LangAndCharset extends Rule {
  documentation() {
    return {
      description:
        'Every page needs <html lang="en"> and <meta charset="utf-8"> as the first element in <head>.',
    };
  }

  setup() {
    this.on("dom:ready", ({ document }) => {
      const html = document.querySelector("html");
      if (!html) return;
      const lang = html.getAttribute("lang");
      if (!lang || lang.value !== "en") {
        this.report(html, '<html> must have lang="en"');
      }
      const head = document.querySelector("head");
      if (!head) return;
      const first = head.childElements[0];
      const charset = first && first.getAttribute("charset");
      if (
        !first ||
        first.tagName !== "meta" ||
        !charset ||
        String(charset.value).toLowerCase() !== "utf-8"
      ) {
        this.report(
          first || head,
          '<meta charset="utf-8"> must be the first element in <head>',
        );
      }
    });
  }
}

module.exports = {
  name: "hello-web",
  rules: { "hello-web/lang-and-charset": LangAndCharset },
};
