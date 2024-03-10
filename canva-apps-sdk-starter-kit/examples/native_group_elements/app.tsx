import React from "react";
import { Button, Rows, Text } from "@canva/app-ui-kit";
import { addNativeElement, addPage, getDefaultPageDimensions} from "@canva/design";

import styles from "styles/components.css";

export const App = () => {

  const calculateElementDimensions = async () => {
    const defaultPageDimensions = await getDefaultPageDimensions();
  
    // If `undefined`, the design is unbounded
    if (!defaultPageDimensions) {
      console.log("Default page dimensions are undefined.");
      return { headerElementWidth: 0, embedElementWidth: 0 };
    }

    const pageWidth = defaultPageDimensions.width;
    const pageHeight = defaultPageDimensions.height; 

    return { pageWidth, pageHeight };
  };

  async function handleClick() {

    const { pageWidth, pageHeight } = await calculateElementDimensions();

    const sizes = {
      titleWidth: pageWidth * 0.8,
      titleHeight: pageHeight * 0.2,
      titleFont: 50,
      bodyWidth: pageWidth * 0.8,
      bodyHeight: pageHeight * 0.6
    };

    // Testing Text Groups
    await addPage({
      elements: [
        // headerElement
        {
          type: "GROUP",
          children: [
            {
              type: "TEXT",
              children: ["Title | width:dasdsadsadss " + pageWidth], // Center align -- run calculations to find center of page - content offset
              top: 0,
              left: 0,
              width: pageWidth * 0.8,
              fontSize: 50,
              fontWeight: "bold",
            },
            {
              type: "TEXT",
              children: ["Body | width: " + pageHeight], // Center align -- run calculations to find center of page - content offset
              top: pageHeight * 0.65,
              left: 0,
              width: pageWidth * 0.8,
              fontSize: 30,
            },
          ],
          top: pageHeight * 0.15, //1080
          left: (pageWidth - sizes.titleWidth) / 2, //1920
          width: (pageWidth * 0.8) || 0, // Ensure width is always a number
          height: "auto",
        },
      ],
    });

    // // title with author
    // await addPage({
    //   elements: [
    //     // headerElement
    //     {
    //       type: "GROUP",
    //       children: [
    //         {
    //           type: "TEXT",
    //           children: ["Title | width:dasdsadsadss " + pageWidth], // Center align -- run calculations to find center of page - content offset
    //           top: 0,
    //           left: 0,
    //           width: pageWidth * 0.8,
    //           fontSize: 50,
    //           fontWeight: "bold",
    //         },
    //         {
    //           type: "TEXT",
    //           children: ["Body | width: " + pageHeight], // Center align -- run calculations to find center of page - content offset
    //           top: pageHeight * 0.65,
    //           left: 0,
    //           width: pageWidth * 0.8,
    //           fontSize: 30,
    //         },
    //       ],
    //       top: pageHeight * 0.15, //1080
    //       left: (pageWidth - sizes.titleWidth) / 2, //1920
    //       width: (pageWidth * 0.8) || 0, // Ensure width is always a number
    //       height: "auto",
    //     },
    //   ],
    // });

    // // title with body
    // await addPage({
    //   elements: [
    //     // headerElement
    //     {
    //       type: "GROUP",
    //       children: [
    //         {
    //           type: "TEXT",
    //           children: ["Title | width:dasdsadsadss " + pageWidth], // Center align -- run calculations to find center of page - content offset
    //           top: 0,
    //           left: 0,
    //           width: pageWidth * 0.8,
    //           fontSize: 38,
    //           fontWeight: "bold",
    //         },
    //         {
    //           type: "TEXT",
    //           children: ["Body | width: " + pageHeight], // Center align -- run calculations to find center of page - content offset
    //           top: pageHeight * 0.20,
    //           left: 0,
    //           width: pageWidth * 0.8,
    //           fontSize: 28,
    //         },
    //       ],
    //       top: pageHeight * 0.1, //1080
    //       left: (pageWidth - sizes.titleWidth) / 2, //1920
    //       width: (pageWidth * 0.8) || 0, // Ensure width is always a number
    //       height: "auto",
    //     },
    //   ],
    // });
  }

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="3u">
        <Text>
          This example demonstrates how apps can create groups of elements.
        </Text>
        <Button variant="primary" onClick={handleClick} stretch>
          Add group element
        </Button>
      </Rows>
    </div>
  );
};
