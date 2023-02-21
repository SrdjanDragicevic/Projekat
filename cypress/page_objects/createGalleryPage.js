class CreateGalleryPage {
    get createGalleryHeading() {
        return cy.get("h1");
    }

    get titleInput() {
        return cy.get("#title");
    }

    get descriptionInput() {
        return cy.get("#description");
    }

    get addImageBtn() {
        return cy.get("button").eq(-3);
    }

    get imageUrlInput1() {
        return cy.get(".input-group").eq(0);
    }

    get deleteImageBtn1() {
        return this.imageUrlInput1.find("button").first();
    }

    get shiftUpImageBtn1() {
        return this.imageUrlInput1.find("button").eq(-2);
    }

    get shiftDownImageBtn1() {
        return this.imageUrlInput1.find("button").last();
    }

    get submitBtn() {
        return cy.get("button").eq(-2);
    }

    get cancelBtn() {
        return cy.get("button").eq(-1);
    }

    clickAddImageBtn() {
        this.addImageBtn.click();
    }

    clickDeleteImageBtn1() {
        this.deleteImageBtn1.click();
    }

    clickShiftUpImageBtn1() {
        this.shiftUpImageBtn1.click();
    }

    clickShiftDownImageBtn1() {
        this.shiftDownImageBtn1.click();
    }

    clickSubmitBtn() {
        this.submitBtn.click();
    }

    clickCancelBtn() {
        this.cancelBtn.click();
    }

    createGallery(title, description, imageUrl1) {
        if (!title) {
            this.descriptionInput.type(description);
            this.addImageBtn.click().click();
            this.imageUrlInput1.type(imageUrl1);
            this.clickSubmitBtn();
        } else if (!description) {
            this.titleInput.type(title);
            this.addImageBtn.click().click();
            this.imageUrlInput1.type(imageUrl1);
            this.clickSubmitBtn();
        } else if (!imageUrl1) {
            this.titleInput.type(title);
            this.descriptionInput.type(description);
            this.clickSubmitBtn();
        } else {
            this.titleInput.type(title);
            this.descriptionInput.type(description);
            this.addImageBtn.click().click();
            this.imageUrlInput1.type(imageUrl1);
            this.clickSubmitBtn();
        }
    }
}

export const createGalleryPage = new CreateGalleryPage();
