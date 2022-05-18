const { wdi5 } = require("wdio-ui5-service")
const views = {
    Main: {
        _viewName: "wdi5.test.view.Main"
    }
}
describe("main page", () => {
    before(async () => {
        await wdi5.goTo("#/RouteMain")
    })

    it("should have the right title", async () => {
        const title = await browser.getTitle()
        expect(title).toEqual("wdi5-test")
    })

    it("should have button with text 'My Main Button'", async () => {
        const button = await browser.asControl({
            selector: {
                viewName: views.Main._viewName,
                properties: {
                    text: "My Main Button"
                }
            }
        })
        const buttonText = await button.getText()
        expect(buttonText).toEqual("My Main Button")
    })
})