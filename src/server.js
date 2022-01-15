import express from "express";
import { configure } from "lasso";
import { serveStatic } from "lasso/middleware";
import markoMiddleware from "@marko/express";
import homePage from "./pages/home";
require("@marko/compiler/register");

// Configure lasso to control how JS/CSS/etc. is delivered to the browser
const isProduction = process.env.NODE_ENV === "production";
configure({
  plugins: [
    "lasso-marko" // Allow Marko templates to be compiled and transported to the browser
  ],
  minify: isProduction, // Only minify JS and CSS code in production
  bundlingEnabled: isProduction, // Only enable bundling in production
  fingerprintsEnabled: isProduction // Only add fingerprints to URLs in production
});

var app = express();

app.use(markoMiddleware()) // Enables res.marko
app.use(serveStatic()) // Serve static assets with lasso

app.get("/", homePage) // Setup the route for our home page handler

app.post("/username", (req, res) => {
  res.json({
    success: true
  })
})


app.listen(process.env.PORT || 8080, function () {
    console.log(
      "Server started! Try it out:\nhttp://localhost:" +
        this.address().port +
        "/"
    );

    if (process.send) {
      process.send("online");
    }
  });
