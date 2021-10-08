import React, { useState, useEffect, memo } from 'react';
import { Header } from "@buffetjs/custom";
import { Table } from '@buffetjs/core';
import axios from "axios";

import styled from "styled-components";



const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`

const HomePage = () => {
  const headers = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Description',
      value: 'description',
    },
    {
      name: 'Url',
      value: 'html_url',
    },    
  ];
  
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/vinicius-ribeiro/repos")
      .then(res => setRows(res.data))
      .catch((e) => 
        strapi.notification.error(`Limite de 60 chamadas atingido, ${e}`)
      );
  }, []);

  return (
    <Wrapper>
      <Header
        title={{ label: "Vinícius Ribeiro - Repositories" }}
        content="Lista de repositórios do desenvolvedor Vinícius Ribeiro"
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
