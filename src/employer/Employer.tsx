import * as React from 'react';

import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { FetchingStatuses } from '../common/enums/fetchingStatuses';
import { Fonts } from '../common/enums/fonts';
import { Colors } from '../common/enums/colors';
import { IEmployer } from './interfaces/IEmployer';

export interface IProps {
  employer: IEmployer[];
  getList: () => void;
  status: FetchingStatuses;
}

export const Employer: React.FC<IProps> = () => (
  <EmployerListStyled>
    <div>
      <FormattedMessage id="employers.graduates" />
    </div>
    <ul>
      <FormattedMessage id="employers.government" />
      <li>
        <ul>
          <a href="http://fsb.ru" target="_blank" rel="noreferrer">
            <li>ФСБ России</li>
          </a>
          <a href="https://fstec.ru/" target="_blank" rel="noreferrer">
            <li>ФСТЭК России</li>
          </a>
          <a href="https://www.rosatom.ru/" target="_blank" rel="noreferrer">
            <li>Госкорпорация Росатом</li>
          </a>
          <a href="https://www.sberbank.ru/" target="_blank" rel="noreferrer">
            <li>Сбербанк России</li>
          </a>
          <a href="http://mil.ru/" target="_blank" rel="noreferrer">
            <li>Минобороны России</li>
          </a>
          <a href="http://stcnet.ru/" target="_blank" rel="noreferrer">
            <li>ФГУП &laquo;НТЦ &laquo;Атлас&raquo;</li>
          </a>
          <a href="https://rt.ru" target="_blank" rel="noreferrer">
            <li>ПАО &laquo;Ростелеком&raquo;</li>
          </a>
        </ul>
      </li>
    </ul>
    <ul>
      <FormattedMessage id="employers.infoseccompanies" />
      <ul>
        <a href="https://bi.zone/" target="_blank" rel="noreferrer">
          <li>Bi.Zone</li>
        </a>
        <a href="https://www.kaspersky.ru/" target="_blank" rel="noreferrer">
          <li>Kaspersky</li>
        </a>
        <a href="https://infosec.ru/" target="_blank" rel="noreferrer">
          <li>Информзащита</li>
        </a>
        <a href="https://www.group-ib.ru/" target="_blank" rel="noreferrer">
          <li>Group-IB</li>
        </a>
        <a href="https://www.cryptopro.ru/" target="_blank" rel="noreferrer">
          <li>Крипто-ПРО</li>
        </a>
        <a href="https://www.securitycode.ru/" target="_blank" rel="noreferrer">
          <li>Код Безопасности</li>
        </a>
        <a href="https://www.croc.ru/" target="_blank" rel="noreferrer">
          <li>КРОК</li>
        </a>
        <a href="https://jet.su/" target="_blank" rel="noreferrer">
          <li>Инфосистемы Джет</li>
        </a>
        <a href="https://npo-echelon.ru/" target="_blank" rel="noreferrer">
          <li>НПО &laquo;Эшелон&raquo;</li>
        </a>
        <a href="https://infotecs.ru/" target="_blank" rel="noreferrer">
          <li>ИнфоТеКС</li>
        </a>
        <a href="http://asplabs.ru/" target="_blank" rel="noreferrer">
          <li>ASP Labs</li>
        </a>
        <a href="https://www.mascom.ru/" target="_blank" rel="noreferrer">
          <li>ЦБИ &laquo;МАСКОМ&raquo;</li>
        </a>
        <a href="https://www.angaratech.ru/" target="_blank" rel="noreferrer">
          <li>Angara</li>
        </a>
        <a href="https://www.aktiv-company.ru/" target="_blank" rel="noreferrer">
          <li>Актив</li>
        </a>
      </ul>
    </ul>
    <ul>
      <FormattedMessage id="employers.itcompanies" />
      <ul>
        <a href="https://yandex.ru/company/" target="_blank" rel="noreferrer">
          <li>Яндекс</li>
        </a>
        <a href="https://corp.mail.ru/ru/company/strategy/" target="_blank" rel="noreferrer">
          <li>Mail.ru Group</li>
        </a>
      </ul>
    </ul>
    <br />
  </EmployerListStyled>
);

const EmployerListStyled = styled.div`
  padding: 5rem;
  font-family: ${Fonts.MONTSERRAT}, sans-serif;
  font-size: 2rem;
  line-height: 3rem;
  li {
    list-style-type: none;
  }
  li:hover {
    color: ${Colors.GREEN};
  }
  a {
    color: ${Colors.WHITE};
    text-decoration: none;
  }
`;
