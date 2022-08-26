import { useState, useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import PizzaItem from './PizzaItem';

function HorizontalWrapper({ items }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((item) => (
        <PizzaItem
          itemId={item.id} // NOTE: itemId is required for track items
          title={item.id}
          key={item.id}
          {...item}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    useContext(VisibilityContext);

  return (
    <BsFillArrowLeftCircleFill
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    />
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <BsFillArrowRightCircleFill
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    />
  );
}

export default HorizontalWrapper