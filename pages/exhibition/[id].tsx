import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExhibitionById } from 'reduxWrapper/actions';
import { RootState } from 'shared/models/rootState';
import { getValidDate } from 'shared/helpers/helpers';
import styles from 'shared/styles/exhibitionDetail/index.module.css';
import { initSelectedExhibition } from 'reduxWrapper/slices/exhibitionSlice';

const ExhibitionInfo: NextPage = () => {
   const router = useRouter();
   const dispatch = useDispatch();
   const { id } = router.query;
   const { selectedExhibition } = useSelector(
      (state: RootState) => state.exhibition,
   );

   const goBack = () => {
      router.push('/');
   };

   useEffect(() => () => {
      dispatch(initSelectedExhibition());
   }, []);

   useEffect(() => {
      let unmounted = false;
      if (!unmounted) {
         if (id) dispatch(getExhibitionById(+id));
      }
      return () => {
         unmounted = true;
      };
   }, [id]);

   return (
      <div className={styles.container}>
         <span className={styles.backButton} onClick={goBack}>
           &lt;- Back
         </span>
         <div className={styles.generalInfo}>
            <h3>{selectedExhibition.title}</h3>
            <p>
               <span>{getValidDate(selectedExhibition.startAt)}</span>
               <span className={styles.separator}>-</span>
               <span>{getValidDate(selectedExhibition.endAt)}</span>
            </p>
         </div>
         <div className={styles.detailInfo}>
            <div>
               {selectedExhibition.img ? (
                  <img src={selectedExhibition.img} alt="" />
               ) : (
                  <img src="/images/default-image.svg" alt="" />
               )}
            </div>
            <span>{selectedExhibition.description}</span>
         </div>
      </div>
   );
};

export default ExhibitionInfo;
