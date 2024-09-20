import { SubHeading } from '@/components';

import { images, data } from '@/constants';

import '@/containers/Laurels/Laurels.css';

const AwardCards = ({ awards }) =>
  awards.map((award, index) => {
    const { imgUrl, title, subtitle } = award;

    return (
      <div className="app__laurels_awards-card" key={title + index}>
        <img src={imgUrl} alt="title" />
        <div className="app__laurels_awards-card_content">
          <p className="p__cormorant" style={{ color: '#dcca87' }}>
            {title}
          </p>
          <p className="p__cormorant">{subtitle}</p>
        </div>
      </div>
    );
  });

const Laurels = () => {
  const { awards } = data;

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          <AwardCards awards={awards} />
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
