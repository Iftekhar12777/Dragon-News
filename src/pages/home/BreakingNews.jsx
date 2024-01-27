import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-2 items-center justify-center mt-5">

      <button className="btn btn-secondary">Breaking News</button>

      <div className="border py-2">
          <Marquee pauseOnHover={true}>
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>
    </div>
  );
};

export default BreakingNews;