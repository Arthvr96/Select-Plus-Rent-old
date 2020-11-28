import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { carsInfo as data } from 'data/carsInfo';

const SelectWraper = styled.select`
  margin-top: 1.5rem;
`;

const Paragraphes = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Paragraph = styled.p`
  margin: 1.5rem 1rem 0 1rem;
  font-size: ${({ theme }) => theme.size.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.font.primary};
`;

const ChangePrice = styled.div`
  display: flex;
  align-items: center;
`;

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

  useEffect(() => {
    const e = document.getElementById('test');
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
  });

  return (
    <Paragraphes>
      <Paragraph>Wybrany plan najmu : {selectedValue}</Paragraph>
      <Paragraph>Koszt : {price}</Paragraph>
      <ChangePrice>
        <Paragraph>Zmień plan najmu: </Paragraph>
        <SelectWraper id="test">
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
