import productGuideImage from "public/assets/temp/product-guide.jpg";
import installationGuideImage from "public/assets/temp/installation-guide.jpg";
import careGuideImage from "public/assets/temp/care-guide.jpg";

const productGuide = {
  sectionTitle: "Product Guide",
  image: {
    src: productGuideImage,
    width: 710,
    height: 710,
  },
  entries: [
    {
      title: "Product Guide",
      body: "Manufactured using specialized techniques, the final product consists of natural stone bonded with the highest quality Portland cement and pigment oxides resulting in a beautiful and unique aesthetic. <br/> <br/> Produced standard in a Honed finish which is suitable for most internal domestic and commercial areas. <br/> <br/> <span style='color: #a19082'> All products are tested to AS 4586-2013 and Slip Resistance Test Reports are available upon request.</span>",
      button: {
        label: 'Download our product guide',
        link: '#',
      },
    },
  ],
  mode: "light",
  orientation: "right",
};

const installationGuides = {
  sectionTitle: "Installation Guides",
  image: {
    src: installationGuideImage,
    width: 710,
    height: 810,
  },
  entries: [
    {
      title: "Product Guide",
      body: "Manufactured using specialized techniques, the final product consists of natural stone bonded with the highest quality Portland cement and pigment oxides resulting in a beautiful and unique aesthetic. <br/> <br/> Produced standard in a Honed finish which is suitable for most internal domestic and commercial areas. <br/> <br/> <span style='color: #a19082'> All products are tested to AS 4586-2013 and Slip Resistance Test Reports are available upon request.</span>",
      button: {
        label: 'Download our product guide',
        link: '#',
      },
    },
    {
      title: "Product Guide",
      body: "Manufactured using specialized techniques, the final product consists of natural stone bonded with the highest quality Portland cement and pigment oxides resulting in a beautiful and unique aesthetic. <br/> <br/> Produced standard in a Honed finish which is suitable for most internal domestic and commercial areas. <br/> <br/> <span style='color: #a19082'> All products are tested to AS 4586-2013 and Slip Resistance Test Reports are available upon request.</span>",
      button: {
        label: 'Download our product guide',
        link: '#',
      },
    },
  ],
  mode: "dark",
  orientation: "left",
};

const careGuide = {
  sectionTitle: "Care and Maintenance",
  image: {
    src: careGuideImage,
    width: 710,
    height: 710,
  },
  entries: [
    {
      title: "Product Guide",
      body: "Following installation, it is recommended that a reputable sealing contractor carry out all cleaning and sealing applications and the recommended Care & Maintenance regime is implemented.",
      button: {
        label: 'Download our guide',
        link: '#',
      },
    },
  ],
  mode: "light",
  orientation: "right",
};

export { productGuide, installationGuides, careGuide };
