import db from "../models";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("-----------------------");
    console.log(data);
    console.log("-----------------------");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};
let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
// object :{
//     key: ''
//     value: ''
// }
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
