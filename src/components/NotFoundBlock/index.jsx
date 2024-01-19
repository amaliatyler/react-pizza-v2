import React from 'react';

import styles from './NotFoundBlock.module.scss';
import pizza from './pizza.png';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={pizza} alt="Pizza icon by BZZRINCANTATION" />
      <h1>Ничего не найдено:(</h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
