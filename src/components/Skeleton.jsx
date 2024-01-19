import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="129" cy="138" r="120" />
    <rect x="0" y="345" rx="0" ry="0" width="128" height="0" />
    <rect x="-2" y="267" rx="10" ry="10" width="280" height="21" />
    <rect x="1" y="301" rx="10" ry="10" width="280" height="88" />
    <rect x="125" y="398" rx="25" ry="25" width="152" height="45" />
    <rect x="7" y="406" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
);

export default Skeleton;
