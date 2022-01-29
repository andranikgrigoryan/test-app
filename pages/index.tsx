import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExhibitions } from 'reduxWrapper/actions';
import { useRouter } from 'next/router';
import { RootState } from 'shared/models/rootState';
import { ExhibitionInterface } from 'shared/models/ExhbitionModel/exhibition.model';
import InfiniteScroll from 'react-infinite-scroll-component';
import ExhibitionItem from 'components/Exhibition/Exhibition';

const Home: NextPage = () => {
   const dispatch = useDispatch();
   const router = useRouter();
   const {
      exhibitions, currentPage, totalItems,
   } = useSelector(
      (state: RootState) => state.exhibition,
   );

   const getMoreExhibitions = () => {
      dispatch(getExhibitions(currentPage + 1));
   };

   useEffect(() => {
      let unmounted = false;

      if (!unmounted) {
         if (!exhibitions.length) dispatch(getExhibitions(currentPage));
      }
      return () => {
         unmounted = true;
      };
   }, []);

  	return (
    	<div>
         <InfiniteScroll
            dataLength={exhibitions.length}
            next={getMoreExhibitions}
            hasMore={totalItems > exhibitions.length}
            loader={(
               <div className="loading-container">
                  <img src="/images/s4gu-loding.gif" alt="loading" />
               </div>
            )}
            endMessage={
               <h4>Nothing more to show</h4>
            }
         >
            {exhibitions.map((exhibition: ExhibitionInterface,) => (
               <React.Fragment key={exhibition.id}>
                  <ExhibitionItem
                     image={exhibition.img}
                     title={exhibition.title}
                     startDate={exhibition.startAt}
                     endDate={exhibition.endAt}
                     onClick={() => router.push(`/exhibition/${exhibition.id}`)}
                  />
               </React.Fragment>
            ))}
         </InfiniteScroll>
    	</div>
   );
};

export default Home;
