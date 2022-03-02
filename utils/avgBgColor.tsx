import FastAverageColor from "fast-average-color";

const fac = new FastAverageColor();

const avgBgColor = (image, recipient) =>
  fac
    .getColorAsync(image)
    .then((color) => {
      recipient(color.hex);
    })
    .catch((e) => {
      console.log(e);
    });

/*
USAGE:
1 - Must be called inside of useEffect hook (https://reactjs.org/docs/hooks-effect.html)
2 - Recipient must be a useState hook (https://reactjs.org/docs/hooks-state.html)

EXAMPLE:
  const [bgColor, setBgColor] = useState(null);
  const bg = './assets/example-bg.jpg';
  
  useEffect(() => {
    avgBgColor(bg, setBgColor)
  }, []);
*/

export default avgBgColor;
