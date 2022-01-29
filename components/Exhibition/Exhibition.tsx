import React from 'react';
import Image from 'next/image';
import styles from '/components/Exhibition/Exhibition.module.css';
import { getValidDate } from 'shared/helpers/helpers';

interface Props {
	image: string;
	title: string;
	startDate: string;
	endDate: string;
	onClick: () => void;
}

const ExhibitionItem: React.FC<Props> = ({
   image,
   title,
   startDate,
   endDate,
   onClick,
}) => (
   <div onClick={onClick} className={styles.itemBox}>
      <div className={styles.imgBox}>
         {image ? (
            <img src={image} alt="" />
         ) : (
            <img src="/images/default-image.svg" alt="" />
         )}
      </div>
      <div className={styles.itemInfo}>
         <span>{title}</span>
         <div>
            <span>{getValidDate(startDate)}</span>
            <span className={styles.separator}>-</span>
            <span>{getValidDate(endDate)}</span>
         </div>
      </div>
   </div>
);

export default ExhibitionItem;
