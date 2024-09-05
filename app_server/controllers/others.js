/* GET 'about' page */
const about = function (req, res) {
  res.render("generic-text", {
    title: "About Loc8r",
    content:
      "Loc8r was created to help people find places to sit down and get a bit of work done.<br/><br/>Lorem ipsum dolor sitamet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscingtristique. Proin posuere semper tellus, id placerat augue dapibusornare. Aenean leo metus, tempus in nisl eget, accumsan interdumdui. Pellentesque sollicitudin volutpat ullamcorper.",
  });
};
module.exports = {
  about,
};
