import * as React from 'react';

import styled from 'styled-components';
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
      Наши выпускники – сотрудники государственных организаций, компаний, специализирующихся на защите информации, и
      крупных ИТ-компаний.
    </div>
    <ul>
      <p>
        Государственный сектор:
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
      </p>
      <p>
        Компании, специализирующиеся на защите информации:
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
          <a href="https://www.ptsecurity.com/ru-ru/" target="_blank" rel="noreferrer">
            <li>Positive Technologies</li>
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
          <a href="https://www.esetnod32.ru/" target="_blank" rel="noreferrer">
            <li>ESET NOD32</li>
          </a>
          <a href="https://www.aktiv-company.ru/" target="_blank" rel="noreferrer">
            <li>Актив</li>
          </a>
        </ul>
      </p>
      <p>
        Крупные ИТ-компании:
        <ul>
          <a href="https://www.ibm.com/ru-ru" target="_blank" rel="noreferrer">
            <li>IBM</li>
          </a>
          <a href="https://www8.hp.com/ru/ru/hp-information/index.html" target="_blank" rel="noreferrer">
            <li>HP</li>
          </a>
          <a href="https://www.delltechnologies.com/ru-ru/index.htm" target="_blank" rel="noreferrer">
            <li>Dell EMC</li>
          </a>
          <a href="https://yadro.com/" target="_blank" rel="noreferrer">
            <li>YADRO</li>
          </a>
          <a href="https://www.pwc.ru/" target="_blank" rel="noreferrer">
            <li>PricewaterhouseCoopers</li>
          </a>
          <a href="https://www.ey.com/ru/ru/home" target="_blank" rel="noreferrer">
            <li>EY</li>
          </a>
          <a href="https://yandex.ru/company/" target="_blank" rel="noreferrer">
            <li>Яндекс</li>
          </a>
          <a href="https://corp.mail.ru/ru/company/strategy/" target="_blank" rel="noreferrer">
            <li>Mail.ru Group</li>
          </a>
          <a href="https://about.google/" target="_blank" rel="noreferrer">
            <li>Google</li>
          </a>
          <a
            href="https://www.intel.ru/content/www/ru/ru/company-overview/company-overview.html"
            target="_blank"
            rel="noreferrer">
            <li>Intel</li>
          </a>
          <a href="https://www.nvidia.com/ru-ru/about-nvidia/" target="_blank" rel="noreferrer">
            <li>NVIDIA</li>
          </a>
        </ul>
      </p>
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
