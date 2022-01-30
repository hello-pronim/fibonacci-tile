function SizeDisplay({ sizes }) {
  const sizeArray = [];
  sizes.forEach((size) => {
    if (!size.parent) {
      sizeArray.push({
        ...size,
        child: [],
      });
    } else {
      let parentIndex = sizeArray.findIndex(
        (item) => item.id === size.parent.id
      );
      sizeArray[parentIndex].child.push(size);
    }
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
