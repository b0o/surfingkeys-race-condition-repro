settings.theme = `
  #sk_omnibar, #sk_status, #sk_usage, #sk_popup, #sk_editor, #sk_tabs, #sk_banner, #sk_bubble, #sk_keystroke {
    background-color: purple;
  }
`;

api.addSearchAlias(
  "r",
  "reddit",
  "https://reddit.com/search?q=",
  "o",
  "https://api.reddit.com/search?syntax=plain&sort=relevance&limit=20&q=",
  (res) => JSON.parse(res.text).data.children.map(({ data }) => data.title)
);

api.mapkey(
  "<Space>h",
  "show hello world message",
  () => api.Front.showPopup("Hello, World!"),
  {}
);
