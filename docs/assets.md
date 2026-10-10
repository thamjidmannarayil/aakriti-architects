# Figma asset import checklist

Source: Main Page, node 1:3, Aakriti Architects. Asset binaries could not be downloaded here.

Export the original raster fills as PNG and the original vector layers as SVG. For image-fill layers, export the source image rather than baking the entire page or surrounding section into an image. Preserve transparency in the hero house. Use filenames below. For compound node IDs, inspect the corresponding instance descendant.

| Local filename | Figma node/layer | Slot |
| --- | --- | --- |
| imgMainPage.png | 1:3 | Outer page image fill |
| imgFooterImage.png | 15:8704 | Consultation footer image |
| imgDisplayPicture.png | 15:8664 | Testimonial avatar |
| imgFeaturedProjectImage.png | 11:50111 | Featured image |
| imgProject1.png | 11:50101 | Project1 |
| imgProject2.png | 11:50102 | Project2 |
| imgProject3.png | 11:50103 | Project3 |
| imgProject4.png | 11:50104 | Project4 |
| imgProject5.png | 11:50105 | Project5 |
| imgAboutImage.png | 8:209 | About image |
| imgSkyBackground.png | 6:67 | Hero sky, behind overlay/display text |
| imgHouseImage.png | 6:54 | Hero foreground house (mirrored by the board transform in Figma) |
| imgLine23.svg | 15:8672 | Footer horizontal divider |
| imgArrow.svg | 15:8707 | Arrow |
| imgEllipse2494.svg | 15:8749 | Ellipse2494 |
| imgElements.svg | 15:8755 | Elements |
| imgElements1.svg | 15:8743 | Elements1 |
| imgElements2.svg | 15:8728 | Elements2 |
| imgLogo.svg | 17:123 | Logo |
| imgLine24.svg | 15:8695 | Contact vertical divider |
| imgElements3.svg | 15:8688 | Elements3 |
| imgElements4.svg | 15:8673 | Elements4 |
| imgEllipse2495.svg | 11:50459 | Ellipse2495 |
| imgElements5.svg | 12:8607 | Elements5 |
| imgStarRating.svg | 15:8658 | StarRating |
| imgQuotesSvgrepoCom1.svg | 15:8660 | QuotesSvgrepoCom1 |
| imgElements6.svg | 13:8615 | Elements6 |
| imgArrow1.svg | 11:50133 | Arrow1 |
| imgVector.svg | 11:50130 | Vector |
| imgLine25.svg | 11:50106 | Main panel section dividers |
| imgEllipse2496.svg | I11:49822;11:49801 | Ellipse2496 |
| imgArrrow.svg | I11:49822;11:49802 | Arrrow |
| imgElements7.svg | 11:49822 | Elements7 |
| imgLampLight.svg | 8:9388 | LampLight |
| imgElements8.svg | 11:49739 | Elements8 |
| imgElements9.svg | 11:49745 | Elements9 |
| imgLine1.svg | 8:205 | Line1 |
| imgLogo1.svg | 17:119 | Logo1 |

## Typography

| Family | Usage |
| --- | --- |
| Inter | Body, navigation, contact details |
| Junge | Section headings and card titles |
| Poppins | Eyebrows and button text |
| Playfair | Brand wordmark |
| Roboto SemiBold | Oversized AAKRITI hero title |
| Alumni Sans | Since 2000 badge |

Font binaries are not bundled. Supply licensed webfonts; wire them in src/app/layout.tsx with next/font/local. CSS token fallback fonts allow the scaffold to run meanwhile.

## Verify after import

- Every file must contain the intended asset, not an HTML error response.
- Match original SVG root dimensions; icon CSS keeps width/height intrinsic.
- Check the 1440 × 3037 desktop target and responsive layouts separately.
- Confirm the hero house orientation, featured crop, avatar, logo, service icons, dividers, and footer call-to-action.
- Figma transformations contain mirrored parents; preserve final rendered orientation, not raw x coordinates.
- Do not use the reference screenshot as a code asset.
