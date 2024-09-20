import { SubHeading } from '@/components';

import { images } from '@/constants';

import '@/containers/Chef/Chef.css';

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <p className="p__opensans">
            Sed tempor sem orci, eget bibendum odio volutpat non. Phasellus ac
            felis sem. Etiam a erat id elit ullamcorper commodo commodo sed leo.
            Pellentesque velit ligula, tempor a diam at, facilisis consequat
            lacus. Fusce sit amet est pharetra ipsum auctor ornare ut quis
            felis. Suspendisse nisl dolor, euismod a semper vitae, tincidunt
            rhoncus ante. Aenean a tempor leo. Donec velit risus, ultrices non
            ullamcorper ac, semper non leo.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
