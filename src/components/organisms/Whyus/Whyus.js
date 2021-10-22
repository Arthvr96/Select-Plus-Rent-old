import React from 'react';
import { guarantees as data } from 'data/guarantees';
import {
  WhyusWrapper,
  Header,
  Paragraph,
  Wrapperguarantees,
  Guarantee,
  GuaranteeHeader,
  GuaranteeParagraph,
} from './Whyus.style';

const headerOne = 'Dlaczego warto wybrać nas ?';
const paragraphOne = 'Postaw na sprawdzoną firmę z indywidualnym podejściem do klienta.';

const Whyus = () => {
  return (
    <WhyusWrapper className="whyusSection">
      <Header>{headerOne}</Header>
      <Paragraph>{paragraphOne}</Paragraph>
      <Wrapperguarantees>
        {data.map(({ header, img, paragraph }) => (
          <Guarantee className="guaratnee" key={header}>
            <div>
              <img alt={header} src={img} />
            </div>
            <GuaranteeHeader>{header}</GuaranteeHeader>
            <GuaranteeParagraph>{paragraph}</GuaranteeParagraph>
          </Guarantee>
        ))}
      </Wrapperguarantees>
    </WhyusWrapper>
  );
};

export default Whyus;
