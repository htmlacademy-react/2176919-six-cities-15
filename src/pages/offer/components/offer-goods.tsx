type OfferGoodsProps = {
  good: string;
}

function OfferGoods({good}: OfferGoodsProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {good}
    </li>
  );
}

export default OfferGoods;
