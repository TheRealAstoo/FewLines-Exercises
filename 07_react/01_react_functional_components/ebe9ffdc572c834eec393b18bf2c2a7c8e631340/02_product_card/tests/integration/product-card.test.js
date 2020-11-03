import { mount } from "enzyme";
import React from "react";
import ProductCard from "../../src/components/product-card";
import CardHeader from "../../src/components/product-card/header";
import CardBody from "../../src/components/product-card/body";
import CardFooter from "../../src/components/product-card/footer";
import { zelda, minecraft } from "../data/games";

const productToProps = (product) => {
  return {
    headerProps: {
      name: product.name,
      platformLogos: product.platforms.map(
        (platform) => platform.platform_logo.url,
      ),
    },
    bodyProps: {
      cover: product.cover.url,
      summary: product.summary,
      genres: product.genres.map((genre) => genre.name),
      screenshots: product.screenshots.map((sc) => sc.url).slice(0, 4),
      firstReleaseDate: product.first_release_date,
    },
    footerProps: {
      slug: product.slug,
    },
  };
};

const { headerProps, bodyProps, footerProps } = productToProps(zelda);

describe("React Product Card", () => {
  let ProductCardDOM;
  beforeEach(() => {
    ProductCardDOM = mount(<ProductCard product={zelda} />);
  });

  describe("#ProductCard", () => {
    it("Should use the header component with the right props", () => {
      expect.assertions(2);
      const header = ProductCardDOM.find(CardHeader);
      expect(header).toHaveLength(1);

      const propsKeys = Object.keys(header.getElement().props).sort();
      expect(propsKeys).toEqual(Object.keys(headerProps).sort());
    });

    it("Should use the body component with the right props", () => {
      expect.assertions(2);
      const body = ProductCardDOM.find(CardBody);
      expect(body).toHaveLength(1);

      const propsKeys = Object.keys(body.getElement().props).sort();
      expect(propsKeys).toEqual(Object.keys(bodyProps).sort());
    });

    it("Should use the footer component with the right props", () => {
      expect.assertions(2);
      const footer = ProductCardDOM.find(CardFooter);
      expect(footer).toHaveLength(1);

      const propsKeys = Object.keys(footer.getElement().props).sort();
      expect(propsKeys).toEqual(Object.keys(footerProps).sort());
    });
  });

  describe("#CardHeader", () => {
    let CardHeaderDOM;
    beforeEach(() => {
      CardHeaderDOM = mount(<CardHeader {...headerProps} />);
    });

    it("Should display the game name", () => {
      expect.assertions(1);

      const html = CardHeaderDOM.html();
      expect(html).toMatch(zelda.name);
    });

    it("Should display one logo per platform", () => {
      expect.assertions(2);

      const image = CardHeaderDOM.find("img");
      expect(image).toHaveLength(1);

      const { headerProps: minecraftHeaderProps } = productToProps(minecraft);

      const MinecraftCardHeaderDOM = mount(
        <CardHeader {...minecraftHeaderProps} />,
      );

      const images = MinecraftCardHeaderDOM.find("img");
      expect(images).toHaveLength(3);
    });
  });

  describe("#CardBody", () => {
    let CardBodyDOM;
    beforeEach(() => {
      CardBodyDOM = mount(<CardBody {...bodyProps} />);
    });

    it("Should display the cover", () => {
      expect.assertions(1);

      const cover = CardBodyDOM.find("img");
      const src = cover.getElement().props.src;
      expect(src).toBe(zelda.cover.url);
    });

    it("Should display the summary", () => {
      expect.assertions(1);

      const html = CardBodyDOM.html();
      expect(html).toMatch(zelda.summary);
    });

    it("Should display the first release date", () => {
      expect.assertions(1);

      const html = CardBodyDOM.html();
      expect(html).toMatch(zelda.first_release_date);
    });

    it("Should display the genres name", () => {
      expect.assertions(zelda.genres.length);

      zelda.genres.forEach((expectedGenre) => {
        const html = CardBodyDOM.html();
        expect(html).toMatch(expectedGenre.name);
      });
    });

    it("Should have a unique button", () => {
      expect.assertions(1);

      const button = CardBodyDOM.find("button");
      expect(button).toHaveLength(1);
    });

    test("Click on the button hides or shows the screenshots", () => {
      expect.assertions(2);
      const button = CardBodyDOM.find("button");

      const imagesCountBeforeClick = CardBodyDOM.find("img").length;
      button.simulate("click");
      const imagesCountAfterClick = CardBodyDOM.find("img").length;
      expect(imagesCountBeforeClick).not.toBe(imagesCountAfterClick);

      button.simulate("click");
      const imagesCountAfterClickAgain = CardBodyDOM.find("img").length;
      expect(imagesCountBeforeClick).toBe(imagesCountAfterClickAgain);
    });
  });

  describe("#CardFooter", () => {
    it("Should display a link to 'games/:slug'", () => {
      expect.assertions(2);

      const FooterDOM = mount(<CardFooter {...footerProps} />);
      const link = FooterDOM.find("a");
      expect(link).toHaveLength(1);
      expect(link.props().href).toBe("games/" + zelda.slug);
    });
  });
});
