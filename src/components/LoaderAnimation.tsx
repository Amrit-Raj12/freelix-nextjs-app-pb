import React, { useEffect } from 'react';
// import bodymovin from 'bodymovin';

const AnimationComponent: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
         {/* @ts-ignore */}
      import('bodymovin').then((bodymovin) => {
        const animationWindow = document.getElementById('animationWindow');
        const animData = {
          wrapper: animationWindow,
          animType: 'svg',
          loop: true,
          prerender: true,
          autoplay: true,
          path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/play_fill_loader.json',
        };
        let anim = bodymovin.loadAnimation(animData);

        anim.addEventListener('complete', () => {
          // Animation complete event listener
        });

        anim.setSpeed(1);

        // Change the color of the loader
        const changeLoaderColor = () => {
          const svg = animationWindow?.querySelector('svg');
          if (svg) {
            const paths = svg.querySelectorAll('path');
            const lines = svg.querySelectorAll('line');
            paths.forEach((path) => {
              path.setAttribute('fill', '#FF1E1E');
              path.setAttribute('stroke', '#FF1E1E');
            });
            lines.forEach((line) => {
              line.setAttribute('stroke', '#FF1E1E');
            });
          }

          // Remove the event listener after it's executed once
          anim.removeEventListener('DOMLoaded', changeLoaderColor);
        };

        anim.addEventListener('DOMLoaded', changeLoaderColor);
      });
    }
  }, []);

  return (
    <div id="animationWindow" className="h-screen bg-black ">
      {/* Animation will be rendered here */}
    </div>
  );
};

export default AnimationComponent;
