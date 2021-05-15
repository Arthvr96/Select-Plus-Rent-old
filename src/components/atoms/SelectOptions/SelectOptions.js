import React, { useEffect, useState } from 'react';
import { Paragraphes, Paragraph, ChangePrice, SelectWraper } from './SelectOptions.style';

const data = [];

const SelectOptions = ({ carNumber, priceNumber }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [price, setPrice] = useState(null);
  const selectedPrice = data[carNumber].priceingInfo[priceNumber].priceName;
  const priceMap = data[carNumber].priceingInfo;
  const deleteChoosenElement = (value) => {
    return value.priceName !== selectedPrice;
  };
  const filteredPriceMap = priceMap.filter(deleteChoosenElement);

  const chagneValue = (e) => {
    setSelectedValue(e.value);
  };

  const refreshReservationData = (e) => {
    setSelectedValue(e.value);
    setPrice(priceMap[priceNumber].price);
    e.addEventListener('change', chagneValue);
    if (e.value === 'Doba') {
      setPrice(priceMap[0].price);
    } else if (e.value === 'Weekend') {
      setPrice(priceMap[1].price);
    } else if (e.value === 'Tydzień') {
      setPrice(priceMap[2].price);
    } else {
      setPrice(priceMap[3].price);
    }
  };

  useEffect(() => {
    const selectWraper = document.getElementById('selectWraper');
    refreshReservationData(selectWraper);
  });

  return (
    <Paragraphes>
      <Paragraph>Wybrany plan najmu : {selectedValue}</Paragraph>
      <Paragraph>Koszt : {price}</Paragraph>
      <ChangePrice>
        <Paragraph>Zmień plan najmu: </Paragraph>
        <SelectWraper id="selectWraper">
          <option value={selectedPrice}>{selectedPrice}</option>
          {filteredPriceMap.map(({ priceName, numberOfCar }) => {
            return (
              <option key={`${numberOfCar}${priceName}`} value={priceName}>
                {priceName}
              </option>
            );
          })}
        </SelectWraper>
      </ChangePrice>
    </Paragraphes>
  );
};

export default SelectOptions;
