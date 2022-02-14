function SizeDisplay({ productVariations }) {
  const sizeArray = [];
  // TODO: update size options based on variations
  productVariations.forEach((variant: any) => {
    variant.productSize.forEach((size: any) => {
      if (!size.parent) {
        const checkIndex = sizeArray.findIndex((item) => item.id === size.id);
        if (checkIndex === -1) {
          sizeArray.push({
            ...size,
            child: [],
          });
        }
      } else {
        let parentIndex = sizeArray.findIndex(
          (item) => item.id === size.parent.id
        );
        sizeArray[parentIndex].child.push(size);
      }
    });
  });
  return (
    <>
      {sizeArray.map((size) => {
        return (
          <span key={size.id}>
            {size.title} &nbsp;
            {size?.child.map((cSize, index) => {
              return (
                <span key={cSize.id}>
                  {cSize.title}
                  {size.child.length - index === 2
                    ? " & "
                    : size.child.length > 2 && index !== size.child.length - 1
                    ? ", "
                    : ""}
                </span>
              );
            })}
            <br />
          </span>
        );
      })}
    </>
  );
}

export default SizeDisplay;
