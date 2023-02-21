/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { allGalleriesPage } from "../page_objects/allGalleries";
import { createGalleryPage } from "../page_objects/createGalleryPage";
import { faker } from "@faker-js/faker";

const galleryInputs = {
    randomTitle: faker.music.songName(),
    randomDescription: faker.lorem.sentence(),
    randomImageUrl1: faker.image.imageUrl(600, 480, ".jpg")
};

const credentials = {
    email: "srdjan.dragicevic@ymail.com",
    password: "iverson1990",
};

describe("Create Gallery tests", () => {
    beforeEach(() => {
        cy.visit("/login");
        loginPage.login(credentials.email, credentials.password);
        cy.url().should("not.include", "/login");
        cy.visit("/create");
                createGalleryPage.createGalleryHeading
                    .should("be.visible")
                    .and("exist")
                    .and("have.text", "Create Gallery")
                    .and("have.class", "title-style");
                cy.url().should("contain", "/create");
                cy.get("form").find("input").should("have.length", 3);
                cy.get("input").eq(1).should("not.have.attr", "required");
                cy.get("button")
                    .eq(-2)
                    .should("have.css", "background-color", "rgb(72, 73, 75)");
        });
    });

    it("Try to create a gallery without title", () => {
        createGalleryPage.createGallery(
            "",
            galleryInputs.randomDescription,
            galleryInputs.randomImageUrl1,
        );
        createGalleryPage.createGalleryHeading
            .should("be.visible")
            .and("exist")
            .and("have.text", "Create Gallery")
            .and("have.class", "title-style")
            .and("have.css", "text-transform", "uppercase")
            .and(
                "have.css",
                "font-family",
                "Avenir, Helvetica, Arial, sans-serif"
            )
            .and("have.css", "color", "rgb(72, 73, 75)");
        cy.url().should("contain", "/create");
        cy.get("form").find("input").should("have.length", 5);
        cy.get("input").eq(1).and("not.have.attr", "required");
    });
    //ovde sam na random nabacao razne asertacije... domaci...

    it("Try to create a gallery without description", () => {
        createGalleryPage.createGallery(
            galleryInputs.randomTitle,
            "",
            galleryInputs.randomImageUrl1,
        );
        allGalleriesPage.allGalleriesHeading
            .should("be.visible")
            .and("exist")
            .and("have.text", "All Galleries");
        cy.url().should("not.contain", "/create");
        cy.get("input").should("have.length", 1);
    });

    it("Try to create a gallery without image", () => {
        createGalleryPage.createGallery(
            galleryInputs.randomTitle,
            galleryInputs.randomDescription,
            ""
        );
        createGalleryPage.createGalleryHeading
            .should("be.visible")
            .and("exist")
            .and("have.text", "Create Gallery");
        cy.url().should("contain", "/create");
        cy.get("input").should("have.length", 3);
    });

    it("Create a valid new gallery", () => {
        createGalleryPage.createGallery(
            galleryInputs.randomTitle,
            galleryInputs.randomDescription,
            galleryInputs.randomImageUrl1
        );
        allGalleriesPage.allGalleriesHeading
            .should("be.visible")
            .and("exist")
            .and("have.text", "All Galleries");
        cy.url().should("not.contain", "/create");
        cy.get("input").should("have.length", 1);
    });
