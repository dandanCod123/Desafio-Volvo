import React from "react";
import { Block, Button, Flex, Spacer, Text } from "vcc-ui";
import { useCars } from '../hooks/useCars';
import { CarCard } from "./Card";

import styles from '../../public/css/home.module.css';
import PaginationDesktop from "./PaginationDesktop";

export const HomeComponent: React.FC = () => {
  const { cars } = useCars();

  const onClickLeft = () => { }
  const onClickRight = () => { }

  console.log(cars);
  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook"> Todos os modelos Recharge</Text>
      <Spacer></Spacer>
      <div className={styles.cardsWrapper}>
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
      <PaginationDesktop onClickLeft={onClickLeft} onClickRight={onClickRight} />
    </div>
  );
};
