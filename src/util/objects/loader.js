import loaderGif from '../../asserts/giphy.gif';

const RenderLoader = () => (
  <div className="loader flex justify-center items-center h-screen bg-darkMode-base">
    <img src={loaderGif} alt="loading..." />
  </div>
);

export default RenderLoader;
